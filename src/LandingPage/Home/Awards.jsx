function Awards() {
    return ( 
        <div className="container mt-5 ">
            <div className="row mt-5 mb-5">
                <div className="col-6">
            <img src="public/media/images/largestBroker.svg" alt="" />
                </div>
                <div className="col-6">
                    <h1 className="text-muted mb-3 mt-5">Largest stockbroker in india</h1>
                    <h5 className="text-muted mb-3">2+ million Zerodha clients  contribute to over 15% of all retail order volumes in india by trading and investing in :</h5>
                    <ul>
                        <div className="row">
                            <div className="col">
                                <li className="mb-3">Futures and Options</li>
                                <li className="mb-3">Community Derivates</li>
                                <li className="mb-3">Currency Derivates</li>
                            </div>
                            <div className="col">
                                <li className="mb-3">Stocks &amp; IPOs</li>
                                <li className="mb-3">Direct Mutual Funds</li>
                                <li className="mb-3">Bonds and Govt.securities</li>
                            </div>
                        </div>
                    </ul>
                    <img src="public/media/images/pressLogos.png" alt="logo" style={{width:"90%"}} />
                </div>
            </div>
        </div>
     );
}

export default Awards;