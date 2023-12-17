import React from "react"
import { Helmet } from "react-helmet"
import favicon16x16 from "../assets/icons/favicon-16x16.png"
import favicon32x32 from "../assets/icons/favicon-32x32.png"

function Head({ title }) {
  const links = [
    { rel: "icon", type: "image/png", sizes: "16x16", href: favicon16x16 },
    { rel: "icon", type: "image/png", sizes: "32x32", href: favicon32x32 },
    {
      rel: "canonical",
      href: "https://cse.iiitd.ac.in",
    },
  ]

  return (
    <div>
      <Helmet
        link={links}
        htmlAttributes={{
          lang: "en",
        }}
      >
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="The Official website of the Computer Science and Engineering (CSE) Department of IIIT Delhi"
        />
        <title>{title}</title>
      </Helmet>
    </div>
  )
}

export default Head
