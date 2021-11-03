import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import GlobalStyles from "../styles/GlobalStyles"
import TypographyStyles from "../styles/TypographyStyles"
import Analogo from "../images/Certisured Final Logo XXX.svg"
import FooterLogo from "../images/certisured white.svg"
import Seo from "./Seo/seo"
import Helmet from "react-helmet"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Layout(props) {
  return (
    <>
      <Seo
        title="Certisured"
        description="Certisured Certificates are Recognized in Industry as a Hard-Earned Certificate. We focus on 360 Degree Education and our students get the best of everything."
      />
      <Helmet>
        <script
          defer
          type="module"
          src="https://cdn.jsdelivr.net/npm/@justinribeiro/lite-youtube@0.6.2/lite-youtube.js"
        ></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=block"
          rel="stylesheet"
        ></link>
      </Helmet>

      <GlobalStyles />
      <TypographyStyles />
      <Navbar Logo={Analogo} />
      <div className="layout">{props.children}</div>
      <Footer Logo={FooterLogo} />
    </>
  )
}

export default Layout
