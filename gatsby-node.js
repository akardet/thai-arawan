const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const itemTemplate = path.resolve("src/templates/item-template.js")
    resolve(
      graphql(
        `
          {
            allContentfulItem {
              edges {
                node {
                  id
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        result.data.allContentfulItem.edges.forEach(({ node }) => {
          createPage({
            path: node.id,
            component: itemTemplate,
            context: {
              id: node.id,
            },
          })
        })
        return
      })
    )
  })
}
