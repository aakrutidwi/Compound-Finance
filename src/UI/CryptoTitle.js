import React from "react";
import "./First.css";
import ApexChart from "./Charts/ApexChart";
import ApexChart1 from "./Charts/ApexChart1";
function CryptoTitle() {
  return (
    <div className="one">
      <div>
        <div>
          <span className="usdc">USDC</span>
          <span className="s1">| Ethereum</span>
          <br />
          <span className="num">
            0xc3d688B66703497DAA19211EEdff47f25384cdc3
          </span>
        </div>
      </div>

      <div className="two">
        <div className="d-fl-co">
          <p className="p2  green">
            Total Collateral
            <div className="cal1">$193.80M</div>
          </p>
          <ApexChart />
        </div>
        <div className="d-fl-co">
          <p className="p2 purple">
            Total Borrowing
            <br />
            <div className="cal">$193.80M</div>
          </p>
          <ApexChart1 />
        </div>
      </div>
    </div>
 
  );
}

export default CryptoTitle;
