function Hero() {
    return ( 
        <div className="container mb-5 mt-5">
            <div className="row text-center">
                <div className="col mb-5">
                    <img src="public/media/images/homeHero.png" alt="HeroImage"  style={{width:"100%"}}/>
                </div>
                <h1 className="text-muted p-3">Invest in everything </h1>
                <h5 className="text-muted mb-4">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</h5>
                <button className="btn btn-primary mb-5  " style={{width:"20%",marginLeft:"28rem",height:"50px",backgroundColor:"#387ed1",fontSize:"large"}}>Sign up for free</button>
            </div>
        </div>
     );
}

export default Hero;