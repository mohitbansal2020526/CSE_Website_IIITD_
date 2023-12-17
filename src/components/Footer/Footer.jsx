import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import IIITDLogo from "../../assets/images/iiitd_footer_color.svg";
import IIITDLogoSmall from "../../assets/images/iiitd_color.svg";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import "./Footer.css";

const Socials = [
  { icon: FaFacebook, href: "https://www.facebook.com/cseiiitd/" },
  { icon: FaTwitter, href: "https://twitter.com/cseiiitd/" },
  { icon: FaInstagram, href: "https://www.instagram.com/cseiiitd/" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/company/cseiiitd/" },
  // Add more social media objects as needed
];

// ... (existing imports)

export default function Footer() {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <footer>
      <div className="footer-div d-flex flex-column align-items-end">
        <div className="socials">
          {Socials.map((item, id) => (
            <a
              className="social-icon"
              href={item.href}
              target="_blank"
              key={id}
              rel="noreferrer"
            >
              <IconContext.Provider value={{ className: "social-logo" }}>
                <div>
                  <item.icon />
                </div>
              </IconContext.Provider>
            </a>
          ))}
        </div>

        <a href="https://www.iiitd.ac.in">
          <img
            className="iiitd-logo"
            src={windowWidth > 800 ? IIITDLogo : IIITDLogoSmall}
            alt="IIITD Logo"
          />
        </a>
      </div>
    </footer>
  );
}
