import React, { useState } from "react";
import {Link} from "react-router-dom";

export default function Navbar(props){

  const [navMode, setNavMode] = useState("light");

  let themeStyle = {};


  function changeNavMode(cls){
    console.log(cls+"cls"+props.mode)
  if(props.mode === 'light' && navMode === "light"){
    themeStyle.color = 'white';
    setNavMode("dark");
    // props.showAlert("Success","Dark mode has been disabled");
} else if(props.mode === "dark" && cls !== undefined) {
  themeStyle.color = 'black';
  setNavMode("light");
  // props.showAlert("Success","Dark Mode has been enabled");
} else {
  themeStyle.color = 'black';
  setNavMode("dark");
  // props.showAlert("Success","Dark Mode has been enabled");
}
  }

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={navMode} >
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.about}</Link>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input id="search" className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button id="button" className="btn btn-primary" type="submit">Search</button>
        </form> */}
        <div className="d-flex">
          <div className="bg-primary  mx-2" onClick={()=>{props.toggleMode("primary"); changeNavMode()}} style={{height:'30px', width:'30px'}}></div>
          <div className="bg-info  mx-2" onClick={()=>{props.toggleMode("info"); changeNavMode()}} style={{height:'30px', width:'30px'}}></div>
          <div className="bg-success  mx-2" onClick={()=>{props.toggleMode("success"); changeNavMode()}} style={{height:'30px', width:'30px'}}></div>
          <div className="bg-warning  mx-2" onClick={()=>{props.toggleMode("warning"); changeNavMode()}} style={{height:'30px', width:'30px'}}></div>
          <div className="bg-danger  mx-2" onClick={()=>{props.toggleMode("danger"); changeNavMode()}} style={{height:'30px', width:'30px'}}></div>
          <div className="bg-black" id="blackNwhite" onClick={()=>{props.toggleMode("dark"); changeNavMode(navMode === "dark" ?"light" : "dark")}} style={{height:'30px', width:'30px'}}></div>
        </div>
        {/* <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={themeStyle}>Enable {props.mode==='light'?'Dark':'Light'} Mode</label>
</div> */}
      </div>
    </div>
  </nav>
    );
}

Navbar.defaultProps = {
    title: "Set title here",
    about : "set about here"
}