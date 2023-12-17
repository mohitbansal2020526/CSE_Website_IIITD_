import React from "react"
import {
  container,
  staffName,
  description,
  jobTitle,
  extra,
} from "./Card2.module.css"

function StaffCard(props) {
  let additionalInfo
  if (props.additionalInfo) additionalInfo = props.additionalInfo.split("\n")
  return (
    <div className={container}>
      <a
        className={staffName}
        href={props.website}
        target="_blank"
        rel="noreferrer"
      >
        <img src={props.image} alt={props.name + " image"} />
        <h3>{props.name}</h3>
      </a>
      <div className={description}>
        {props.jobTitle && <p className={jobTitle}>{props.jobTitle}</p>}
        {props.education && <p>{props.education}</p>}
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
      <div className="bottom-0 start-0 position-absolute my-2 justify-content-center d-flex w-100">
        {props.GoogleScholar && (
          <a
            className="m-2"
            href={props.GoogleScholar}
            target="_blank"
            rel="noreferrer"
          >
            <img
              height={50}
              width={50}
              src="https://i.imgur.com/2c1Dynj.png"
              alt="Google Scholar"
            />
          </a>
        )}
        {props.DBLP && (
          <a
            className="m-2"
            href={`https://dblp.org/pid/${props.DBLP}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              height={50}
              width={50}
              src="https://i.imgur.com/krzsdm3.png"
              alt="DBLP"
            />
          </a>
        )}
      </div>
    </div>
  )
}

export default StaffCard
