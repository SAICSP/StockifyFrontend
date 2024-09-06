import OpenAccount from "../OpenAccount";
import Awards from "./Awards";
import Education from "./Education";
import Pricing from "./Pricing";
import Stats from "./Stats";
import Hero from "./Hero";

function Homepage() {
    return ( 
        <div className="container">
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
        </div>
        ) ;
}

export default Homepage;