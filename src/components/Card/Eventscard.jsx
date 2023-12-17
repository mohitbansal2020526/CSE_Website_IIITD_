import React from "react"
import "../Layout.css"
import { Link } from "gatsby"

const Eventscard = props => {
  let style = {
    margin: "1vw",
  }
  return (
    <div>
      <div className="eventContainer">
        <div className="eventItem-left">
          <div className="date">
            <div className="month">{props.month}</div>
            <div className="day">{props.day}</div>
          </div>
        </div>

        <div className="eventItem-right">
          <Link to = {props.link} className="right-link">{props.title}</Link><br/>
          {props.description}
        </div>
      </div>
      <hr style={style} />
    </div>
  )
}

export default Eventscard
