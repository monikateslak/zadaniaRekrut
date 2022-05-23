import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

function Navi() {
  return (
    <div className="navi-box">
      <nav>
        <Router>
          <ul className="navi-items">
            <li className="navi-items_item">
              <Link to="/">Home</Link>
            </li>
            <li className="navi-items_item">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="navi-items_item">
              <Link to="/about">About</Link>
            </li>
            <li className="navi-items_item">
              <Link to="/user">User</Link>
            </li>
          </ul>
        </Router>
      </nav>
    </div>
)
}

export default Navi
