import React from "react"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Head from "./Head"
import "./Layout.css"

function Layout({ mainClass, title, children }) {
  return (
    <div className={`${mainClass} body-container`}>
      <Head title={`${title} | IIITD CSE`} />
      <Header />
      <div className="body">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
