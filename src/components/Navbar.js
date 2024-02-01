import React, { useState } from "react";

export default function Navbar(props){


  let themeStyle = {};

  if(props.mode === 'dark'){
      themeStyle.color = 'white';
  } else {
    themeStyle.color = 'black';
  }


    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.about}</a>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input id="search" className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button id="button" className="btn btn-primary" type="submit">Search</button>
        </form> */}
        <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={themeStyle}>Enable {props.mode==='light'?'Dark':'Light'} Mode</label>
</div>
      </div>
    </div>
  </nav>
    );
}

Navbar.defaultProps = {
    title: "Set title here",
    about : "set about here"
}