import OpenAccount from "../OpenAccount";
import Brokerage from "./Brokerage";
import Pricing from "./Pricing";
function PricingPage() {
    return ( 
        <div className="container">
            <Pricing/>
            <OpenAccount/>
            <Brokerage/>
        </div>
     );
}

export default PricingPage;