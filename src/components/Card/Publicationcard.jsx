import React from "react"
import "../Layout.css"
import research_paper_icon from "../../assets/images/research-paper.png"
import { Link } from "gatsby"

const Publicationcard = props => {
  let style = {
    margin: "10px",
  }
  return (
    <div>
      <div className="publicationContainer">
        <div className="pubItem-left">
          <img
            src={research_paper_icon}
            className="research-icon"
            alt="research_paper_icon"
          />
        </div>

        <div className="pubItem-right">
          <Link to={props.link} className="right-link">
            {props.title}
          </Link>
          <p className="publication-desc">{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Publicationcard
