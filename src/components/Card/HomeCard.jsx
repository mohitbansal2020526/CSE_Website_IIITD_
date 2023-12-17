import React from "react"
import {
  container,
  staffName,
  description,
  jobTitle,
  extra,
} from "./Card.module.css"

function HomeCard(props) {
  let additionalInfo
  if (props.additionalInfo) additionalInfo = props.additionalInfo.split("\n")
  return (
    <div className={container}>
      <a
        className={staffName}
        href={props.link}
        target="_blank"
        rel="noreferrer"
      >
        <img src={props.image} alt={props.title + " image"} />
        <h3>{props.title}</h3>
      </a>
      <div className={description}>
        {props.subtitle && <p className={jobTitle}>{props.subtitle}</p>}
        {props.description && <p>{props.description}</p>}
        {props.field && <p className={extra}>{props.field}</p>}
        {props.additionalInfo && (
          <p className={extra}>
            {additionalInfo.map(x => (
              <>
                {x}
                <br />
              </>
            ))}
          </p>
        )}
      </div>
    </div>
  )
}

export default HomeCard
