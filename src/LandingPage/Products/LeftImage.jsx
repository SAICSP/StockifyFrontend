function LeftImage({
  imageURL,
  productName,
  productDescription,
  link1,
  link2,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-7 mb-5">
            <img src={imageURL} alt="" />
        </div>
        <div className="col-5">
          <h2 className="mt-5">{productName}</h2>
          <p style={{lineHeight:"2"}}>{productDescription}</p>
          <div className="mb-4 my-5" >
            <a href={link1} style={{textDecoration:"none"}} className="mx-5 ">{link1}</a>
            <a href={link2} style={{textDecoration:"none"}} className="mx-5 ">{link2}</a>
          </div>
          <div>
            <a href={googlePlay} className="mx-5">
              <img src="/media/images/googlePlayBadge.svg" alt="" />
            </a>
            <a href={appStore}>
              <img src="/media/images/appstoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImage;
