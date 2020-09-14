import React from "react"
import { Button } from "semantic-ui-react"
import BlogLayout from "../layouts/BlogLayout/"

export default function Home() {
  return (
    <BlogLayout>
      <h1>Estamos en la home del blog</h1>
      <h2>Hola0</h2>
      <p>esto es un parrafo</p>
      <Button content="Primary" primary />
      <Button content="Secondary" secondary />
    </BlogLayout>
  )
}
