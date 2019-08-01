import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "buddhist-symbol.png" }) {
        childImageSharp {
          fixed(width: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img className={className} fixed={data.file.childImageSharp.fixed} />
}

export default function Hero() {
  return (
    <header>
      <div>
        <div className="header-content">
          <Image className="header-accent" />
          <h1>
            bringing the taste
            <br />
            of THAILAND
            <br />
            to TEXAS
          </h1>
        </div>
      </div>
    </header>
  )
}
