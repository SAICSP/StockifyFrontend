import { useEffect, useRef, useState } from 'react';
import './Pricing.css';  // Make sure to include the CSS file

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
    <div className="container mb-5" ref={pricingRef}>
      <h1 className="text-muted mb-4 text-center" style={{ marginTop: '200px' }}>Pricing</h1>
      <h4 className="text-muted text-center" style={{ marginBottom: '200px' }}>Free equity investments and flat ₹20 intraday and F&O trades</h4>
      <div className="row mb-5">
        <div className={`col text-center pricing-item ${visible ? 'slide-up-1' : ''}`}>
          <img src="/media/images/pricingEquity.svg" alt="" />
          <h2 className="text-muted mb-4">Free equity delivery</h2>
          <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className={`col mb-5 pricing-item ${visible ? 'slide-up-2' : ''}`}>
          <img src="/media/images/intradayTrades.svg" alt="" />
          <h3 className="text-muted mb-4">Intraday and F&O trades</h3>
          <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className={`col pricing-item ${visible ? 'slide-up-3' : ''}`}>
          <img src="/media/images/pricingEquity.svg" alt="" />
          <h2 className="text-muted mb-4">Free direct MF</h2>
          <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
