function Pricing() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col mb-5">
                    <h1 className="mb-5 mt-5    ">Unbeatable pricing</h1>
                    <h6 className="text-muted mb-3">we pioneered the concept of discount broking and price transparency in india.Flat fees and no hidden charges.</h6>
                    <a href="" style={{textDecoration:"none"}} >See pricing&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                <div className="col text-center mt-5 ">
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