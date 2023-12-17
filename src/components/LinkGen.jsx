import { graphql, useStaticQuery } from "gatsby"
import * as PropTypes from "prop-types"
import React from "react"
import trim from "trim"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

FontAwesomeIcon.propTypes = { icon: PropTypes.any }
export default function LinkGen({ children, data }) {
  data = useStaticQuery(graphql`
    {
      allStaffCsv {
        nodes {
          name
          website
        }
      }
    }
  `)["allStaffCsv"]["nodes"]
  const res = {}
  data.forEach(item => (res[item["name"]] = item["website"]))
  const input = children.split(",").map(x => trim(x))
  return (
    <td style={{ "white-space": "nowrap" }}>
      <ul className="fa-ul">
        {input.sort().map(name => (
          <li>
            <FontAwesomeIcon icon={faUser} color={"#58585a"} />
            <a href={res[name]}>
              {"  "}
              {name}
            </a>
          </li>
        ))}
      </ul>
    </td>
  )
}
