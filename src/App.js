import NavBar from './UI/NavBar';
import './App.css';
import { Table } from './UI/Table';
import CryptoTitle from './UI/CryptoTitle';
import Ether from './UI/Ether';


import SummaryData from './UI/SummaryData';


function App() {
  return (
    <div >
     
<NavBar/>
<CryptoTitle/>
 <SummaryData/> 

  <Table/>
  <Ether/> 

  

    </div>
  );
}

export default App;
