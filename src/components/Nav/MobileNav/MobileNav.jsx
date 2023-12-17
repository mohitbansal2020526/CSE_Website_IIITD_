import React, { useState } from "react"
import { Link } from "gatsby"
import { FaTimes, FaBars } from "react-icons/fa"
import { IconContext } from "react-icons"
import { MenuItems, Socials } from "../MenuItems"
import cse_logo from "../../../assets/images/new_logo.png"
import Accordion from "../Elements/Accordion/Accordion"
import "./MobileNav.css"

const MobileNav = () => {
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(null)

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <nav className="navbar-mobile">
      <Link to="/" className="navbar-logo">
        <img className="logo" src={cse_logo} alt="logo" />
      </Link>
      <div onClick={handleClick}>
        <IconContext.Provider
          value={{ color: "#221f1f", className: "menu-icon" }}
        >
          <div>{click ? <FaTimes /> : <FaBars />}</div>
        </IconContext.Provider>
      </div>
      <ul className={click ? "nav2-menu-mobile active" : "nav2-menu-mobile"}>
        {Object.keys(MenuItems).map((prop, id) => {
          const item = MenuItems[prop]
          return (
            <Accordion
              key={id}
              title={item.title}
              path={item.path}
              children={item.children}
              active={dropdown === item.title}
              setDropdown={setDropdown}
            />
          )
        })}
        <li aria-label="Contact">
          <Link className="nav2-links-mobile title-mobile" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <div className="socials">
            {Socials.map((item, id) => (
              <a href={item.href} target="_blank" key={id} rel="noreferrer">
                <IconContext.Provider
                  value={{
                    color: "#221f1fa1",
                    className: "social-logo",
                  }}
                >
                  <div aria-label={item.name}>
                    <item.icon aria-label={item.name} />
                  </div>
                </IconContext.Provider>
              </a>
            ))}
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default MobileNav
