

function Team() {
    return ( 
        <div className="container">
            <h2 className="text-muted mt-5 text-center mb-5">People</h2>
            <div className="row mb-5 mt-5">
                <div className="col mx-5 ">
                    <img src="public/media/images/nithinKamath.jpg" alt="image" style={{borderRadius:"100%",width:"70%",marginLeft:"100px", marginTop:"30px"}} />  <br />
                    <h2 className="text-center text-muted mt-4 fs-3">Nithin Kamath</h2>
                    <h5 className="text-center text-muted">Founder, CEO</h5>
                </div>
                <div className="col my-5 " style={{marginRight:"100px"}}> 
                    <p style={{lineHeight:"2"}}>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p style={{lineHeight:"2"}}>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p style={{lineHeight:"2"}}>Playing basketball is his zen.</p>
                </div>
                </div>
        </div>
     );
}

export default Team;