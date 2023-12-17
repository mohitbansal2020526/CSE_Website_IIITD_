import React, { useState } from "react"
import { Link } from "gatsby"
import "./Dropdown.css"

function Dropdown({ items }) {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(true)
  }

  return (
    <>
      <ul
        onClick={handleClick}
        onKeyPress={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {items.map((item, id) => {
          return (
            <li key={id}>
              <Link
                className={item["cName"]}
                to={item["path"]}
                onClick={() => setClick(false)}
                onKeyPress={handleClick}
              >
                {item["title"]}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Dropdown
