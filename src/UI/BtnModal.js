import React from "react";
import dollar from "./assest/dollar.png";
import bitcoin from "./assest/bitcoin.png";
import etherum from "./assest/etherum.png";
import wallet from "./assest/wallet.png";

import "./Modal.css";
const BtnModal = ({ closeModal }) => {
  //to close model send a callback function to change state in parent
  const finish = () => {
    closeModal(false);
  };
  return (
    <div className="modal-container">
      <div className="modal-content">
      <span className="material-icons cross-btn" onClick={finish}>
cancel
</span>
        <header>
          <h2>Connect Wallet</h2>
          <h3>To start using Compound</h3>
        </header>

        <div className="first">
          <ul className="list">
            <li>
              <div>
                <img src={dollar} className="App-logo" alt="logo" />
                MetaMask
              </div>
              <span className="material-symbols-rounded">arrow_forward</span>
            </li>

            <li>
              <div>
                <img src={bitcoin} className="App-logo" alt="logo" />
                Ledger
              </div>
              <span className="material-symbols-rounded">arrow_forward</span>
            </li>

            <li>
              <div>
                <img src={wallet} className="App-logo" alt="logo" />
                WalletConnect
              </div>

              <span className="material-symbols-rounded">arrow_forward</span>
            </li>

            <li>
              <div>
                <img src={etherum} className="App-logo" alt="logo" />
                CoinBase Wallet
              </div>

              <span className="material-symbols-rounded">arrow_forward</span>
            </li>
          </ul>
        </div>
        <footer>
          <h5>
            By connecting , I accept Compound's{" "}
            <span style={{ color: "#00AD6A" }}>Terms of Service</span>
          </h5>
        </footer>
      </div>
    </div>
  );
};

export default BtnModal;
