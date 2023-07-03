import React, { useState } from "react";
import "./WalletCard.css";
import Ethereum from "./assest/etherum.png";
import { ethers } from "ethers";

const WalletCard = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const connectwalletHandler = () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      provider.send("eth_requestAccounts", []).then(async () => {
        await accountChangedHandler(provider.getSigner());
      });
    } else {
      setErrorMessage("Please Install Metamask!!!");
    }
  };
  const accountChangedHandler = async (newAccount) => {
    const address = await newAccount.getAddress();
    setDefaultAccount(address);
    const balance = await newAccount.getBalance();
    setUserBalance(ethers.utils.formatEther(balance));
    await getuserBalance(address);
  };
  const getuserBalance = async (address) => {
    const provider = new ethers.providers.Web3Provider(window.Ethereum);
    const balance = await provider.getBalance(address, "latest");
  };
  return (
    <div className="WalletCard">
      <img src={Ethereum} className="AppLogo" alt="logo" />
      <h3>Welcome to a decentralized Application</h3>
      <button
        className="btn3"
        style={{ background: defaultAccount ? "#A5CC82" : "white" }}
        onClick={connectwalletHandler}
      >
        {defaultAccount ? "Connected!!" : "Connect"}
      </button>
      <div className="Address">
        <h4>Address:{defaultAccount}</h4>
        <div className="Amount">
          <h3>Wallet Amount: {userBalance}</h3>
        </div>
      </div>
      {errorMessage}
    </div>
  );
};
export default WalletCard;
