import { useEffect, useRef, useState } from 'react';
import './OpenAccount.css';

function OpenAccount() {
    const [visible, setVisible] = useState(false);
    const openAccountRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const position = openAccountRef.current.getBoundingClientRect().top;
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
            className={`container mb-5 open-account-container ${visible ? 'visible' : ''}`} 
            ref={openAccountRef}
        >
            <div className="row mt-5 text-center">
                <h1 className="text-muted p-3">Open a Zerodha account</h1>
                <h5 className="text-muted mb-4">
                    Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                </h5>
                <button 
                    className="btn btn-primary mb-5" 
                    style={{ width: "20%", marginLeft: "28rem", height: "50px", backgroundColor: "#387ed1", fontSize: "large" }}
                >
                    Sign up for free
                </button>
            </div>
        </div>
    );
}

export default OpenAccount;
