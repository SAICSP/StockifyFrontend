import LeftImage from "./LeftImage";
import RightImage from "./RightImage";
import Universe from "./Universe";
import Hero from './Hero'

function ProductsPage() {
    return ( 
        <div className="container">
            <Hero/>
            <LeftImage  imageURL="public/media/images/kite.png"  productName="Kite"  productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."  link1="Try Demo"  link2="Learnmore"  googlePlay=""  appStore=""/>
            <RightImage imageURL="public/media/images/console.png" productName="Console" productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." connect="Learnmore"/>
            <LeftImage  imageURL="public/media/images/coin.png"  productName="Coin"  productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."  link1="Coin"  link2=""  googlePlay=""  appStore=""/>
            <RightImage imageURL="public/media/images/kiteconnect.png" productName="Kite Connect API" productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." connect="Kite Connect"/>
            <LeftImage  imageURL="public/media/images/varsity.png"  productName="Varsity Mobile"  productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."  link1=""  link2=""  googlePlay=""  appStore=""/>
            <Universe/>
        </div>
     );
}

export default ProductsPage;