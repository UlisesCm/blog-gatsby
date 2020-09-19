import React from "react"
import propType from "prop-types"
import { Icon } from "semantic-ui-react"
import { Link } from "gatsby"
import "./Pagination.scss"

export default function Pagination(props) {
  const { pageContext } = props
  const { previousPagePath, nextPagePath } = pageContext
  console.log(pageContext)
  return (
    <div className="pagination">
      {previousPagePath && (
        <Link to={previousPagePath}>
          {""}
          <Icon size="huge" name="arrow alternate circle left" />
        </Link>
      )}
      {nextPagePath && (
        <Link to={nextPagePath}>
          <Icon size="huge" name="arrow alternate circle right" />
        </Link>
      )}
    </div>
  )
}

Pagination.propType = {
  pageContext: propType.object.isRequired,
}
