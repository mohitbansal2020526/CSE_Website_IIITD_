import React, { useEffect, useState } from "react"
import { Slide } from "react-awesome-reveal"
import { Card } from "react-bootstrap"
import { container, heading, description, cardheader } from "./Card.module.css"

function CardsP(props) {
  const [PUBLIC_URL, setURL] = useState(null)
  const [imagePath, setImagePath] = useState("")

  useEffect(() => {
    setURL(window.location.origin)
  }, [])

  useEffect(() => {
    if (PUBLIC_URL)
      setImagePath(
        props.image?.includes("images/uploads")
          ? `${PUBLIC_URL}/${props.image}`
          : props.image
      )
  }, [PUBLIC_URL])

  // console.log(imagePath)
  return (
    <Slide triggerOnce direction={"up"}>
      <Card className={container}>
        <Card.Header className={cardheader}>
          <a
            className={heading}
            href={props.link ? props.link : "#"}
            target="_blank"
            rel="noreferrer"
          >
            {props.title}
          </a>
        </Card.Header>
        <Card.Img width="100%" src={imagePath} />
        <div className={description}>
          {props.subtitle && <h5 style={{ opacity: 0.9 }}>{props.subtitle}</h5>}
          <small>
            {props.temp
              ? null
              : props.description.split("\n").map(line => (
                  <p>
                    <small>{line}</small>
                  </p>
                ))}
          </small>
        </div>
      </Card>
    </Slide>
  )
}

export default CardsP
