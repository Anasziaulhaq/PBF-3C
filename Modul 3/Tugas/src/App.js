import React from 'react';
import logo from './AA.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Biodata() {
  return (

    <center>
      <div>
        <h3>Biodata</h3>
        <br></br>
        <img src={logo} alt="logo" className="roundedcircel" width="350" />
      </div>
      <br>
      </br>
      <div>
        <h3>Nama    : Muhammad Anas Ziaulhaq</h3>
        <br></br>
        <h3>Nim     : 1741720123</h3>
        <br></br>
        <h3>Kelas   :TI-3C </h3>
        <br></br>
        <h3>Alamat : Jln Tembus Perumahan Beru Permai</h3>
      </div>
    </center>
  )
}

export default Biodata;