function Pricing() {
    return ( 
        <div className="container mb-5">
            <h1 className="text-muted  mb-4 text-center " style={{marginTop:"200px"}}>Pricing</h1>
            <h4 className="text-muted text-center" style={{marginBottom:"200px"}}>Free equity investments and flat ₹20 intraday and F&O trades </h4>
            <div className="row mb-5" >
                <div className="col text-center">
                    <img src="/media/images/pricingEquity.svg" alt="" />
                    <h2 className="text-muted mb-4">Free equity delivery</h2>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col mb-5">
                    <img src="/media/images/intradayTrades.svg" alt="" />
                    <h3 className="text-muted mb-4">Intraday and F&O trades</h3>
                    <hp className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</hp>
                </div>
                <div className="col">
                    <img src="/media/images/pricingEquity.svg" alt="" />
                    <h2 className="text-muted mb-4">Free direct MF</h2>
                    <hp className="text-muted ">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</hp>
                </div>
            </div>
        </div>
     );
}

export default Pricing;