import { useEffect, useRef, useState } from 'react';
import './Hero.css';

function Hero() {
    const [visible, setVisible] = useState(false);
    const heroRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const position = heroRef.current.getBoundingClientRect().top;
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
            className={`hero-container ${visible ? 'visible' : ''}`}
            ref={heroRef}
        >
            <div className="row text-center">
                <div className="col mb-5">
                    <img src="/media/images/homeHero.png" alt="HeroImage" style={{ width: "100%" }} />
                </div>
                <h1 className="text-muted p-3">Invest in everything</h1>
                <h5 className="text-muted mb-4">
                    Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                </h5>
                <button
                    className="btn btn-primary mb-5"
                    style={{
                        width: "20%",
                        marginLeft: "28rem",
                        height: "50px",
                        backgroundColor: "#387ed1",
                        fontSize: "large"
                    }}
                >
                    Sign up for free
                </button>
            </div>
        </div>
    );
}

export default Hero;
