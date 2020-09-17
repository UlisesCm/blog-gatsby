/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  // Fetch your items (blog posts, categories, etc).
  const posts = await graphql(`
    query {
      allStrapiPost(sort: { fields: createdAt, order: DESC }) {
        nodes {
          id
          title
          url
          content
          createdAt
          miniature {
            publicURL
          }
        }
      }
    }
  `)

  // Create your paginated pages
  paginate({
    createPage,
    items: posts.data.allStrapiPost.nodes,
    itemsPerPage: 12,
    pathPrefix: "/",
    component: path.resolve(`./src/templates/blog.js`),
  })
}
