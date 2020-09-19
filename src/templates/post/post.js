import React from "react"
import "./Post.scss"
export default function Post(props) {
  const { pageContext } = props
  const { data: post } = pageContext
  console.log(post)
  return (
    <div>
      <h1>Estamos en la pagina de post</h1>
    </div>
  )
}
