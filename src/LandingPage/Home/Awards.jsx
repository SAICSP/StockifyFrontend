import { useEffect, useRef, useState } from 'react';
import './Awards.css';

function Awards() {
    const [visible, setVisible] = useState(false);
    const awardsRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const position = awardsRef.current.getBoundingClientRect().top;
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
            className={`container mt-5 awards-container ${visible ? 'visible' : ''}`} 
            ref={awardsRef}
        >
            <div className="row mt-5 mb-5">
                <div className="col-6">
                    <img src="/media/images/largestBroker.svg" alt="" />
                </div>
                <div className="col-6">
                    <h1 className="text-muted mb-3 mt-5">Largest stockbroker in India</h1>
                    <h5 className="text-muted mb-3">
                        2+ million Zerodha clients contribute to over 15% of all retail order volumes in India by trading and investing in:
                    </h5>
                    <ul>
                        <div className="row">
                            <div className="col">
                                <li className="mb-3">Futures and Options</li>
                                <li className="mb-3">Commodity Derivatives</li>
                                <li className="mb-3">Currency Derivatives</li>
                            </div>
                            <div className="col">
                                <li className="mb-3">Stocks &amp; IPOs</li>
                                <li className="mb-3">Direct Mutual Funds</li>
                                <li className="mb-3">Bonds and Govt. securities</li>
                            </div>
                        </div>
                    </ul>
                    <img src="/media/images/pressLogos.png" alt="logo" style={{ width: "90%" }} />
                </div>
            </div>
        </div>
    );
}

export default Awards;
