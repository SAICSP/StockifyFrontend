function RightImage({imageURL,productName,productDescription,connect}) {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2 style={{marginTop:"100px"}}>{productName}</h2>
                    <h6 style={{lineHeight:"2"}} className="text-muted">{productDescription}</h6>
                    <a style={{textDecoration:"none"}} href={connect}>{connect}</a>
                </div>
                <div className="col">
                    <img src={imageURL} alt=""  style={{width:"100%"}}/>
                </div>
            </div>
        </div>
     );
}

export default RightImage;