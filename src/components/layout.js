/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Navigation from "../components/nav"

import "../sass/main.scss"

const Layout = ({ children }) => {
  return (
    <>
      {/* <Navigation /> */}
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
