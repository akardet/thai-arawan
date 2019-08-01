import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
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
