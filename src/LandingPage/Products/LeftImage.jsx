import { useEffect, useRef, useState } from 'react';
import './LeftImage.css'; // Ensure to import the CSS

function LeftImage({
  imageURL,
  productName,
  productDescription,
  link1,
  link2,
  googlePlay,
  appStore,
}) {
  const [imageVisible, setImageVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const imageTop = imageRef.current.getBoundingClientRect().top;
        const textTop = textRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (imageTop < windowHeight - 100) {
          setImageVisible(true);
        } else {
          setImageVisible(false);
        }

        if (textTop < windowHeight - 100) {
          setTextVisible(true);
        } else {
          setTextVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container left-image-container">
      <div className="row">
        <div className="col-7 mb-5">
          <img
            src={imageURL}
            alt=""
            ref={imageRef}
            className={`slide-in-left ${imageVisible ? 'visible' : ''}`}
          />
        </div>
        <div className="col-5">
          <h2 className={`mt-5 slide-in-right ${textVisible ? 'visible' : ''}`} ref={textRef}>
            {productName}
          </h2>
          <p style={{lineHeight:"2"}} className={`slide-in-right ${textVisible ? 'visible' : ''}`}>
            {productDescription}
          </p>
          <div className="mb-4 my-5">
            <a href={link1} style={{textDecoration:"none"}} className="mx-5">
              {link1}
            </a>
            <a href={link2} style={{textDecoration:"none"}} className="mx-5">
              {link2}
            </a>
          </div>
          <div>
            <a href={googlePlay} className="mx-5">
              <img src="/media/images/googlePlayBadge.svg" alt="" />
            </a>
            <a href={appStore}>
              <img src="/media/images/appstoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImage;
