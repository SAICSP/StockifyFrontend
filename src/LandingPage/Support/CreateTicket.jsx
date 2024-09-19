import { useEffect, useRef, useState } from 'react';
import './CreateTicket.css';

function CreateTicket() {
  const [visible, setVisible] = useState(false);
  const createTicketRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const position = createTicketRef.current.getBoundingClientRect().top;
      const screenHeight = window.innerHeight / 1.5;

      if (position < screenHeight) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount as well
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container mt-5" ref={createTicketRef}>
      <h2 className="text-muted">To create a ticket, select a relevant topic</h2>
      <div className="row mt-5">
        <div className={`col ${visible ? 'slide-up visible' : 'slide-up'}`}>
          <h3 className="text-muted"><i className="fa-solid fa-circle-plus"></i> Account Opening</h3><br />
          <a style={{textDecoration:"none"}} href="">Getting started</a><br /><br />
          <a style={{textDecoration:"none"}} href="">Online</a><br /><br />
          <a style={{textDecoration:"none"}} href="">Offline</a><br /><br />
          <a style={{textDecoration:"none"}} href="">Charges</a><br /><br />
          <a style={{textDecoration:"none"}} href="">Company, Partnership and HUF</a><br /><br />
          <a style={{textDecoration:"none"}} href="">Non Resident Indian (NRI)</a><br /><br />
        </div>
        <div className={`col ${visible ? 'slide-up visible' : 'slide-up'}`}>
          <h3 className="text-muted"> <i className="fa-solid fa-user"></i> Your Zerodha Account</h3><br />
          <a style={{textDecoration:"none"}} href="">Login credentials</a><br /><br />
          <a style={{textDecoration:"none"}} href="">Your Profile</a><br /><br />
          <a style={{textDecoration:"none"}} href="">Account modification and segment addition</a><br /><br />
          <a style={{textDecoration:"none"}} href="">CMR & DP ID</a><br /><br />
          <a style={{textDecoration:"none"}} href="">Nomination</a><br /><br />
          <a style={{textDecoration:"none"}} href="">Transfer and conversion of shares</a><br /><br />
        </div>
        <div className={`col ${visible ? 'slide-up visible' : 'slide-up'}`}>
          <h3 className="text-muted"> <i className="fa-solid fa-chart-simple"></i> Trading and Markets</h3><br />
          <a style={{textDecoration:"none"}} href="">Trading FAQs</a><br /><br />
          <a style={{textDecoration:"none"}} href="">Kite</a><br /><br />
          <a style={{textDecoration:"none"}} href="">Margins</a><br /><br />
          <a style={{textDecoration:"none"}} href="">Product and order types</a><br /><br />
          <a style={{textDecoration:"none"}} href="">Corporate actions</a><br /><br />
          <a style={{textDecoration:"none"}} href="">Kite features</a><br /><br />
        </div>
      </div>
      <div className="row mt-5">
        <div className={`col ${visible ? 'slide-up visible' : 'slide-up'}`}>
          <h3 className="text-muted"><i className="fa-solid fa-money-check-dollar"></i> Funds</h3><br />
          <a style={{textDecoration:"none"}} href="">Fund withdrawal</a><br /><br />
          <a style={{textDecoration:"none"}} href="">Adding funds</a><br /><br />
          <a style={{textDecoration:"none"}} href="">Adding bank accounts</a><br /><br />
          <a style={{textDecoration:"none"}} href="">eMandates</a><br /><br />
        </div>
        <div className={`col ${visible ? 'slide-up visible' : 'slide-up'}`}>
          <h3 className="text-muted"><i className="fa-solid fa-display"></i> Console</h3><br />
          <a style={{textDecoration:"none"}} href="">IPO</a><br /><br />
          <a style={{textDecoration:"none"}} href="">Portfolio</a><br /><br />
          <a style={{textDecoration:"none"}} href="">Funds statement</a><br /><br />
          <a style={{textDecoration:"none"}} href="">Profile</a><br /><br />
          <a style={{textDecoration:"none"}} href="">Reports</a><br /><br />
          <a style={{textDecoration:"none"}} href="">Referral program</a><br /><br />
        </div>
        <div className={`col ${visible ? 'slide-up visible' : 'slide-up'}`}>
          <h3 className="text-muted"> <i className="fa-brands fa-bitcoin"></i> Coin</h3><br />
          <a style={{textDecoration:"none"}} href="">Understanding mutual funds and Coin</a><br /><br />
          <a style={{textDecoration:"none"}} href="">Coin app</a><br /><br />
          <a style={{textDecoration:"none"}} href="">Coin web</a><br /><br />
          <a style={{textDecoration:"none"}} href="">Transactions and reports</a><br /><br />
          <a style={{textDecoration:"none"}} href="">National Pension Scheme (NPS)</a><br /><br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
