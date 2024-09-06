import './Hero.css'
function Hero() {
    return (
        <div className="container-fluid" style={{backgroundColor:"#3874d1",height:"500px "} }>
            <div className="spread ">
                    <h3 className='mt-5'><a style={{textDecoration:"none",marginLeft:"100px"}} href="">Support Portal</a></h3><br />
                    <h4 className='mt-5'><a style={{textDecoration:"none",marginRight:"100px"}} href="">Track tickets</a></h4>
            </div>
            <div className="row mt-5" style={{marginTop:"200px"}}>
                <div className="col mx-5 ">
                    <h4>Search for an answer or browse help topics to create a ticket</h4><br />
                    <input type="text" style={{height:"70px",width:"100%",borderRadius:"4px",border:"none"}} placeholder='Eg.how do i activate F&O ,why my order getting rejected' name="" id="" /> <br /><br />
                    <a href="" style={{marginRight:"40px",marginTop:"50px"}}>Track account opening</a> 
                    <a href="">Track segment activation <hr /></a>
                    <a href="" style={{marginRight:"70px"}}>Intraday margins</a>
                    <a href="">Kite user manual</a><br />
                </div>
                <div className="col mx-5">
                    <h2>Featured</h2><br />
                    <ol type='1'>
                        <li><a href="">Current Buybacks - August 2024</a></li><br />
                        <li><a href="">Offer for sale (OFS) - August 2024</a>

                        </li>
                    </ol>
                </div>
            </div>
        </div>
      );
}

export default Hero;