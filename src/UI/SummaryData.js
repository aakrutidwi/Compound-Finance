import React from "react";
import "./SummaryData.css";
import SummaryChart from "./SummaryChart";
import coin from "./assest/dollar-coin.png";
import wallet from "./assest/wallet.png";

function SummaryData() {
  return (
    <div className="Summary">
      <div className="num1">



      <div className="card">
          <div className="title">Total Earning</div>
          <div className="data">$213.93M </div>
        </div>



        <div className="card">
          <div className="title">Earn APR</div>
          <div className="data">
            <img src={coin} className="App-logo" alt="logo" />
            $213.93M
          </div>
        </div>
        <div className="card">
          <div className="title">Earn Distribution</div>
          <div className="data">
            <img src={wallet} className="App-logo" alt="logo" />
            $213.93M
          </div>
        </div>
        <div className="card">
          <div className="title">Reserves</div>
          <div className="data">$213.93M </div>
        </div>

        <div className="card1">
          <div className="title">Total Borrowing</div>
          <div className="data">$213.93M </div>
        </div>
        <div className="card1">
          <div className="title">Borrow APR</div>
          <div className="data">
        
            <img src={coin} className="App-logo" alt="logo" />
            $213.93M
          </div>
        </div>
        <div className="card1">
          <div className="title">Borrow Distribution</div>
          <div className="data">
          
            <img src={wallet} className="App-logo" alt="logo" />
            $213.93M
          </div>
        </div>
        <div className="card1">
          <div className="title">Oracle Price</div>
          <div className="data">$213.93M </div>
        </div>
      </div>

    
      <SummaryChart />
    </div>
  );
}

export default SummaryData;
