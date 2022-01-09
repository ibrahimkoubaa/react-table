import React, {useState} from 'react';
import Header from '../Header/Header'
import Thead from '../Thead/Thead'
import Tbody from '../Tbody/Tbody'
import './Table.css';

let customersData = [{
  name: "Ibrahim kouxbaa",
  id: 1221567856,
  description: "Lorem ipsum dolor sit amet, consectetur...",
  rate: "70.00",
  currency: "INR",
  balance: "00.00",
  deposit: "500.00",
  status: "active",
  checkBox: "unchecked",
  protection: "unlock"
}, {
  name: "Ibrahim koubaa",
  id: 1221567480,
  description: "Lorem ipsum dolor sit amet, consectetur...",
  rate: "70.00",
  currency: "INR",
  balance: "00.00",
  deposit: "500.00",
  status: "active",
  checkBox: "unchecked",
  protection: "unlock"
}, {
  name: "Soukainax udouh",
  id: 5764545875,
  description: "Lorem ibra dolor sit amet, consectetur...",
  rate: "80.00",
  currency: "INR",
  balance: " 270.00",
  deposit: "500.00",
  status: "inactive",
  checkBox: "unchecked",
  protection: "unlock"
}, {
  name: "Ahmed Oudwouh",
  id: 5754555424,
  description: "Lorem ipsum dolor sit amet, consectetur...",
  rate: "80.00",
  currency: "INR",
  balance: "170.00",
  deposit: "500.00",
  status: "active",
  checkBox: "unchecked",
  protection: "unlock"
}, {
  name: "Saad Koxubaa",
  id: 4125656448,
  description: "Lorem ipsum dolor sit amet, consectetur...",
  rate: "70.00",
  currency: "INR",
  balance: "-270.00",
  deposit: "500.00",
  status: "inactive",
  checkBox: "unchecked",
  protection: "unlock"
}, {
  name: "Abdellaxxh Oudouh",
  id: 4576448755,
  description: "Lorem ipsum dolor sit amet, consectetur...",
  rate: "80.00",
  currency: "INR",
  balance: "270.00",
  deposit: "500.00",
  status: "inactive",
  checkBox: "unchecked",
  protection: "unlock"
}, {
  name: "Khalid Ouwdouh",
  id: 5754564245,
  description: "Lorem ipsum dolor sit amet, consectetur...",
  rate: "80.00",
  currency: "INR",
  balance: "170.00",
  deposit: "500.00",
  status: "inactive",
  checkBox: "unchecked",
  protection: "unlock"
}, {
  name: "Youwness Oudouh",
  id: 6454678755,
  description: "Lorem ipsum dolor sit amet, consectetur...",
  rate: "80.00",
  currency: "INR",
  balance: "0.00",
  deposit: "500.00",
  status: "inactive",
  checkBox: "unchecked",
  protection: "unlock"
}, {
  name: "Mounia Mekxxrane",
  id: 5754542475,
  description: "Lorem ipsum dolor sit amet, consectetur...",
  rate: "80.00",
  currency: "INR",
  balance: "170.00",
  deposit: "500.00",
  status: "inactive",
  checkBox: "unchecked",
  protection: "unlock"
}, {
  name: "Abdelhadi Oudxxouh",
  id: 5576658755,
  description: "Lorem ipsum dolor sit amet, consectetur...",
  rate: "80.00",
  currency: "INR",
  balance: "270.00",
  deposit: "500.00",
  status: "inactive",
  checkBox: "unchecked",
  protection: "unlock"
}, {
  name: "Azouz Mexxwkrane",
  id: 5754524574,
  description: "Lorem ipsum dolor sit amet, consectetur...",
  rate: "80.00",
  currency: "INR",
  balance: "-170.00",
  deposit: "500.00",
  status: "inactive",
  checkBox: "unchecked",
  protection: "unlock"
}, {
  name: "Ibrahim koxxubaa",
  id: 5122156748,
  description: "Lorem ipsum dolor sit amet, consectetur...",
  rate: "70.00",
  currency: "INR",
  balance: "00.00",
  deposit: "500.00",
  status: "active",
  checkBox: "unchecked",
  protection: "unlock"

}];

function App() {
const [arrayToRender,setarrayToRender]=useState(customersData)
  return (
    <div>
      <Header myArray={customersData} funToRender={setarrayToRender} />
      <table id="table">
        <Thead />
        <Tbody arrayToRender={arrayToRender} funToRender={setarrayToRender}/>
       
      </table>

    </div>

  );
}

export default App;
