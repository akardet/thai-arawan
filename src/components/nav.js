import { Link } from "gatsby"
import React from "react"

const Navigation = ({ siteTitle }) => (
  <nav>
    <Link to="/">Thai Arawan</Link>
    <h3>คนดีอาหารที่ดี</h3>
    <ul>
      <li>
        <Link to="#menu">Menu</Link>
      </li>
      <li>
        <Link to="#story">Story</Link>
      </li>
      <li>
        <Link to="/contact/">Contact</Link>
      </li>
      <li>
        <button>Order Now</button>
      </li>
    </ul>
  </nav>
)

export default Navigation
