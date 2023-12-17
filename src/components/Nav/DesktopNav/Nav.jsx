import React, { useState } from "react"
import { Image } from "react-bootstrap"
import Dropdown from "../Elements/Dropdown"
import { Link } from "gatsby"
import { FiChevronDown } from "react-icons/fi"
import { IconContext } from "react-icons"
import { MenuItems, Socials } from "../MenuItems"
import { QuickLinks } from "../QuickLinks"
import cse_logo from "../../../assets/images/new_logo.png"
import "./Nav.css"

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null)

  const onMouseEnter = prop => {
    setDropdown(prop)
  }

  const onMouseLeave = () => {
    setDropdown(null)
  }

  return (
    <>
      <nav className="navbar-internal align-bottom align-text-bottom ">
        <Link to="/" className="navbar-logo h-80 mb-3 mt-2">
          <Image className="h-100" src={cse_logo} alt="logo" />
        </Link>
        <div className=" mh-100 ms-3 mt-3">
          {/* <ul className="nav2-menu row mh-25 text-end m-auto quick_links pb-2 ms-4 ps-1">
              {Object.keys(QuickLinks).map((prop, id) => {
                const item = QuickLinks[prop]
                return (
                  <li
                    className="nav2-item col-auto mx-1 px-0"
                    key={id}
                  >
                    <Link to={item.path} className="nav2-links text-capitalize">
                      {item.title}
                    </Link>
                  </li>
                )
              })}

              <li className="nav2-item col-auto mx-1 px-0">
                <Link to="/contact" className="nav2-links text-capitalize">
                  Contact
                </Link>
              </li>

            </ul> */}

          <ul className="nav2-menu nav2-ul row mh-25 me-0">
            <div className="mx-2 p-0" />
            {Object.keys(MenuItems).map((prop, id) => {
              const item = MenuItems[prop]
              return (
                <li
                  className="nav2-item align-bottom align-text-bottom col-auto mx-3 px-0 h-auto mt-2 mx-1"
                  style={{ height: "3rem" }}
                  key={id}
                  onMouseEnter={() => onMouseEnter(prop)}
                  onMouseLeave={() => onMouseLeave(prop)}
                >
                  <Link
                    to={item.path}
                    className="nav2-links mx-0 fs-6 px-0 pb-3"
                  >
                    <strong>{item.title} </strong>{" "}
                    <FiChevronDown className="down-arrow" />
                  </Link>
                  {dropdown === prop && <Dropdown items={item.children} />}
                </li>
              )
            })}
          </ul>
        </div>
        {/* <div className="socials">
          <div className="row">
          {Socials.map((item, id) => (
              <a className="col-5" href={item.href} target="_blank" key={id}
                 rel="noreferrer">
                <IconContext.Provider
                    value={{className: "social-logo"}}>
                  <div>
                    <item.icon/>
                  </div>
                </IconContext.Provider>
              </a>
          ))}
          </div>
        </div> */}
      </nav>
    </>
  )
}

export default Navbar
