import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "ta-logo.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.file.childImageSharp.fixed} />
}

const Navigation = () => (
  <nav>
    <Link className="navigation-logo" to="/">
      <Image />
    </Link>
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
