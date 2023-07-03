import dollar from "./assest/dollar.png";
import bitcoin from "./assest/bitcoin.png";
import etherum from "./assest/etherum.png";
import wallet from "./assest/wallet.png";
export const COLUMNS = [
  {
    Header: "Collateral Asset",
    accessor: "Collateral Asset",
    Cell: ({ row }) => (
      <div>
         <img src={bitcoin} className="App-logo" alt="logo" />
                {/* <img src={getImageForAsset(row.original["Collateral Asset"])} className="App-logo" alt="logo" />
                {row.original["Collateral Asset"]} */}
      </div>
    ),
  },
  {
    Header: "Total Supply",
    accessor: "Total Supply",
  },
  {
    Header: "Oracle Price",
    accessor: "Oracle Price",
  },
  {
    Header: "Reserves",
    accessor: "Reserves",
  },
  {
    Header: "Collateral Factor",
    accessor: "Collateral Factor",
  },
  {
    Header: "Liquidation Factor",
    accessor: "Liquidation Factor",
  },
  {
    Header: "Liquidation Penalty",
    accessor: "Liquidation Penalty",
  },
];
const getImageForAsset = (asset) => {
  if (asset === "Asset 1") {
    return wallet;
  } else if (asset === "Asset 2") {
    return dollar;
  } else if (asset === "Asset 3") {
    return bitcoin;
  }  else if (asset === "Asset 3") {
    return etherum;
  } 
  
  
  
  else {
    return ""; // Provide a default image URL or handle the case when no matching image is found
  }
};
