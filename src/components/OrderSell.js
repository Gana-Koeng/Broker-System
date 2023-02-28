
import "../style/SignUp.css"

import BuyForm from "./BuyForm";
import Buy from "./Buy";

function OrderSell() {

  return (
    <div className="App">
      <div className="container">
      <div className="left">
      <div className="title">
          List All Data
       
       </div>
       <Buy />
	  
    </div>
    <div className="right">

      <div className="title">
          Choose Your Option
        </div>
        <div className="sub-container">
          <div id="myDIV">


            <button class="btn active"> <a
              style={{
                color: "white",
                paddingLeft: 13,
                textDecoration: "none",
              }}
              href="/Order/Sell"
            >
              Sell
            </a></button>
            <button class="btn "><a
              style={{
                color: "white",
                paddingLeft: 13,
                textDecoration: "none",

              }}
              href="/Order/Buy"
            >
              Buy
            </a></button>
           
           
            <button class="btn"><a
              style={{
                color: "white",
                paddingLeft: 13,
                textDecoration: "none",
              }}
              href="/Order/Change"
            >
              Change
            </a></button>
            <button class="btn"><a
              style={{
                color: "white",
                paddingLeft: 13,
                textDecoration: "none",

              }}
              href="/Order/Cancel"
            >
              Cancel
            </a></button>
            
          </div>
        </div>
<BuyForm />
      </div>
    </div>
      
    </div>
  );
}

export default OrderSell;
