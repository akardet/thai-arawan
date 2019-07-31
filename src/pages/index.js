import React, { Component } from "react"
import { Link } from "gatsby"
import AOS from "aos"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "aos/dist/aos.css"

export default class IndexPage extends Component {
  componentDidMount() {
    this.aos = AOS
    this.aos.init({
      duration: 1000,
    })
  }

  componentDidUpdate() {
    this.aos.refresh()
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <header>Header</header>
        <section id="story" className="section-story">
          <div className="story-container" data-aos="fade-up">
            {/* <h1 className="story-title">Our Story One Two</h1> */}
          </div>
          <p className="story-info" data-aos="fade-up">
            BOO YA!
          </p>
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
  }
}
