import { useEffect, useRef, useState } from 'react';
import './Education.css';

function Education() {
    const [visible, setVisible] = useState(false);
    const educationRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const position = educationRef.current.getBoundingClientRect().top;
            const screenHeight = window.innerHeight / 1.5;

            if (position < screenHeight) {
                setVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div 
            className={`container education-container ${visible ? 'visible' : ''}`} 
            ref={educationRef}
        >
            <div className="row mb-5 mt-5">
                <div className="col">
                    <img src="/media/images/education.svg" alt="" />
                </div>
                <div className="col mt-5">
                    <h2 className="mt-5 mb-5">Free and open market education</h2>
                    <h6 className="text-muted">
                        Varsity, the largest online stock market education book in the world, covering everything from basics to advanced training.
                    </h6>
                    <a href="#" style={{ textDecoration: "none", marginBottom: "20px" }}>
                        Varsity&nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i>
                    </a>
                    <h6 className="text-muted mt-5">
                        Trading Q&amp;A, the most active trading and investing community in India for all your market-related queries.
                    </h6>
                    <a href="#" style={{ textDecoration: "none" }}>
                        Trading Q&amp;A&nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Education;
