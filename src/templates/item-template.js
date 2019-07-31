import React, { Component } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

export default class Item extends Component {
  render() {
    const { title, price } = this.props.data.contentfulItem
    const { description } = this.props.data.contentfulItem.description

    return (
      <div>
        <h1>{title}</h1>
        <h2>{price}</h2>
        <p>{description}</p>
      </div>
    )
  }
}

Item.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query itemQuery($id: String!) {
    contentfulItem(id: { eq: $id }) {
      title
      price
      description {
        description
      }
    }
  }
`
