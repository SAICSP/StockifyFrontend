function Universe() {
    return ( 
        <div className="container text-center">
            <h1 className="mb-5">The Zerodha Universe</h1>
            <p className="mb-5">Extend your trading and investment experience even further with our partner platforms</p>
    <div className="row mb-5">
        <div className="col">
            <img src="public/media/images/zerodhaFundhouse.png" alt=""  className="mb-3" style={{width:"60%"}}/>
            <p>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
        </div>
        <div className="col">
            <img src="public/media/images/smallcaseLogo.png" alt="" className="mb-3" style={{width:"60%"}}/>
            <p>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
        </div>
        <div className="col">
            <img src="public/media/images/goldenpiLogo.png" className="mb-3" alt="" />
            <p>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
        </div>
    </div>
    <div className="row">
        <div className="col">
            <img src="public/media/images/dittoLogo.png" className="mb-3" alt="" style={{width:"40%"}} />
            <p>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
        </div>
        <div className="col">
            <img src="public/media/images/streakLogo.png" className="mb-3" alt="" style={{width:"50%"}}/>
            <p>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
        </div>
        <div className="col">
            <img src="public/media/images/sensibullLogo.svg" className="mb-3" alt="" style={{width:"60%"}} />
            <p>an options trading platform that allows to do more to users to create and buy stocks and funds</p>
        </div>
    </div>
                <button className="btn btn-primary mb-5  mt-5" style={{width:"20%",height:"50px",backgroundColor:"#387ed1",fontSize:"large"}}>Sign up for free</button>
</div>

     );
}

export default Universe;