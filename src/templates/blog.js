import React from "react"
import { graphql } from "gatsby"
import BlogLayout from "../layouts/BlogLayout"
import PostList from "../components/PostList"

export default function Blog(props) {
  const { data } = props
  const posts = data.allStrapiPost.nodes
  return (
    <BlogLayout>
      <PostList posts={posts} />
    </BlogLayout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allStrapiPost(
      skip: $skip
      limit: $limit
      sort: { fields: createdAt, order: DESC }
    ) {
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
`
