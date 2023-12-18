// Eventscard.jsx

import React from "react"
import "../Layout.css"
import { Link } from "gatsby"

const Eventscard = props => {
  let style = {
    margin: "1vw",
  };

  // Add the styles directly in the component file
  const cardStyle = {
    overflow: "hidden", // or overflow: auto;
    // Add any additional styles as needed
  };

  return (
    <div style={cardStyle} className="eventscard-container">
      <div className="eventContainer">
        <div className="eventItem-left">
          <div className="date">
            <div className="month">{props.month}</div>
            <div className="day">{props.day}</div>
          </div>
        </div>

        <div className="eventItem-right">
          <Link to={props.link} className="right-link">
            {props.title}
          </Link>
          <br />
          <p >
            {props.description}
          </p>
        </div>
      </div>
      <hr style={style} />
    </div>
  )
}

export default Eventscard
