import React from "react"
import { Container, Grid } from "semantic-ui-react"
import "./BlogLayout.scss"

export default function BlogLayout(props) {
  const { children } = props
  return (
    <Container fluid className="blog-layout">
      <Grid>
        <Grid.Column mobile={16} tablet={16} computer={4}>
          <h1>Menu</h1>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={16} computer={12}>
          {children}
        </Grid.Column>
      </Grid>
    </Container>
  )
}
