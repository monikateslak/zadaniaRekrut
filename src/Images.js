import React from 'react'
//import {ReactSVG} from 'react-svg'
import logo from './logo.svg'

function Images() {
  return (
    <div className="images-box">

        <img src={logo} width="100" height="100" className="logo" alt='logo'></img>



      <span>
        <div>images one</div>
        <div>images one</div>
      </span>
    </div>
  )
}

export default Images
