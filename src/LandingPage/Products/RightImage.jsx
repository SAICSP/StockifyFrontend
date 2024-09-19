import { useEffect, useRef, useState } from 'react';
import './RightImage.css'; // Ensure to import the CSS

function RightImage({ imageURL, productName, productDescription, connect }) {
  const [imageVisible, setImageVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current && textRef.current) {
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
    <div className="container right-image-container">
      <div className="row">
        <div className="col">
          <h2 className={`slide-in-left ${textVisible ? 'visible' : ''}`} style={{ marginTop: '100px' }} ref={textRef}>
            {productName}
          </h2>
          <h6 className={`slide-in-left ${textVisible ? 'visible' : ''}`} style={{ lineHeight: '2' }} ref={textRef}>
            {productDescription}
          </h6>
          <a style={{ textDecoration: 'none' }} href={connect}>
            {connect}
          </a>
        </div>
        <div className="col">
          <img
            src={imageURL}
            alt=""
            className={`slide-in-right ${imageVisible ? 'visible' : ''}`}
            ref={imageRef}
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightImage;
