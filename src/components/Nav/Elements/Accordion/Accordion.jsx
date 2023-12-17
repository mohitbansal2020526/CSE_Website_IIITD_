import React, { useState, useEffect, useRef } from "react"
import Chevron from "../Chevron"
import { Link } from "gatsby"
import "./Accordion.css"

function Accordion({ title, path, children, active, setDropdown }) {
  const [height, setHeight] = useState("0px")
  const [rotate, setRotate] = useState("accordion-icon")

  const content = useRef(null)

  useEffect(() => {
    setHeight(!active ? "0px" : `${content.current.scrollHeight}px`)
    setRotate(!active ? "accordion-icon" : "accordion-icon rotate")
  }, [active])

  function toggleAccordion() {
    setDropdown(active ? null : title)
  }

  return (
    <div className="accordion-section">
      <button className="accordion-button" onClick={toggleAccordion}>
        <Link to={path} className="accordion-title">
          {title}
        </Link>
        <Chevron className={`${rotate}`} width={10} fill={"#221f1f"} />
      </button>
      <ul
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion-menu"
      >
        {children.map((item, index) => {
          return (
            <li key={index}>
              <Link className="accordion-nav2-links" to={item["path"]}>
                {item["title"]}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Accordion
