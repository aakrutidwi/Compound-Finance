// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./style.css";
import React,{useState} from "react";
import BtnModal from "./BtnModal";
export default function NavBar() {


  const [modal,setModal] =useState(false);

  //write callback function here , access arguuments, and vchange the state
 const getStateFromModel = (data)=>{
setModal(data)
 }
  return (
    <nav className="nav">
      <ul>
        <li>Compound</li>
        <li>
          <span className="material-symbols-rounded">dashboard</span>
          DashBoard
        </li>
        <li>
          <span class="material-symbols-rounded">equalizer</span>
          Markets
        </li>
        <li>
          <span className="material-symbols-rounded">extension</span>
          Extensions
        </li>
        <li>
          <span className="material-symbols-rounded">check_circle</span>
          Vote
        </li>
      </ul>
      <button className="btn" onClick={()=>{
        setModal(true)}}>Connect Wallet</button>

{modal && <BtnModal closeModal={getStateFromModel}/> } 
    </nav>
    
  );
}
