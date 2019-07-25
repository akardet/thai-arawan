import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header>Header</header>
    <section id="story" className="section-about">
      <Link to="/team/">Our Team</Link>
    </section>
    <section id="recognition" className="section-recognition">
      Recognition
    </section>
    <section id="menu" className="section-menu">
      Menu
    </section>
  </Layout>
)

export default IndexPage
