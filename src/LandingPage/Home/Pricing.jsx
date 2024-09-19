import { useEffect, useRef, useState } from 'react';
import './Pricing.css';

function Pricing() {
    const [visible, setVisible] = useState(false);
    const pricingRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const position = pricingRef.current.getBoundingClientRect().top;
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
            className={`container mt-5 pricing-container ${visible ? 'visible' : ''}`} 
            ref={pricingRef}
        >
            <div className="row">
                <div className="col mb-5">
                    <h1 className="mb-5 mt-5">Unbeatable pricing</h1>
                    <h6 className="text-muted mb-3">
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </h6>
                    <a href="#" style={{ textDecoration: "none" }}>
                        See pricing&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
                <div className="col text-center mt-5">
                    <div className="row">
                        <div className="col border p-3">
                            <h1>₹0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="col border p-3">
                            <h1>₹20</h1>
                            <p>Intraday and F&amp;O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
