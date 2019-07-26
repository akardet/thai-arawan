import { Link } from "gatsby"
import React from "react"

const Navigation = ({ siteTitle }) => (
  <nav>
    <Link className="navigation-logo" to="/">
      Thai Arawan
    </Link>
    <h3>คนดีอาหารที่ดี</h3>
    <ul>
      <li>
        <Link to="#menu">Menu</Link>
      </li>
      <li>
        <Link to="#story">Our Story</Link>
      </li>
      <li>
        <Link to="/contact/">Contact</Link>
      </li>
      <li>
        <button>Order Online</button>
      </li>
    </ul>
  </nav>
)

export default Navigation
