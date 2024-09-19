import React, { useEffect, useState } from 'react';
import './Hero.css'; // Import the CSS file

function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.hero-container');
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check visibility on initial render

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`container hero-container ${isVisible ? 'visible' : ''}`}>
            <h1 className="text-muted mb-4 text-center" style={{ marginTop: "200px" }}>
                Technology
            </h1>
            <h5 className="text-muted mb-4 text-center">
                Sleek, modern, and intuitive trading platforms
            </h5>
            <h6 className="text-muted text-center" style={{ marginBottom: "200px" }}>
                Check out our <a href="" style={{ textDecoration: "none" }}>investment offerings →</a>
            </h6>
        </div>
    );
}

export default Hero;
