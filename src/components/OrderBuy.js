import "../style/SignUp.css";

import BuyForm from "./BuyForm";
import Buy from "./Buy";

function MyForm() {
  return (
    <div className="App">
      <div className="container">
        <div className="right">
          <div className="title">List All Data</div>
          <Buy />
        </div>
        <div className="left">
          <div className="title">Choose Your Option</div>
          <div className="sub-container">
            <div id="myDIV">
              <button class="btn">
                {" "}
                <a
                  style={{
                    color: "white",
                    paddingLeft: 13,
                    textDecoration: "none",
                  }}
                  href="/Order/Sell"
                >
                  Sell
                </a>
              </button>
              <button class="btn active">
                <a
                  style={{
                    color: "white",
                    paddingLeft: 13,
                    textDecoration: "none",
                  }}
                  href="/Order/Buy"
                >
                  Buy
                </a>
              </button>

              <button class="btn">
                <a
                  style={{
                    color: "white",
                    paddingLeft: 13,
                    textDecoration: "none",
                  }}
                  href="/Order/Change"
                >
                  Change
                </a>
              </button>
              <button class="btn">
                <a
                  style={{
                    color: "white",
                    paddingLeft: 13,
                    textDecoration: "none",
                  }}
                  href="/Order/Cancel"
                >
                  Cancel
                </a>
              </button>
              <BuyForm />
            </div>
          </div>
        </div>
      </div>
      <div className="right-v2"><Buy /></div>
    </div>
  );
}

export default MyForm;
