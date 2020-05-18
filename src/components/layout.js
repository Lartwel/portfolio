/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import layoutStyles from "./styles/layout.module.scss"

const Layout = ({ children, title }) => {
  

  return (
    <div className={layoutStyles.layout}>
      <Header siteTitle={"title"} />
      <div className={layoutStyles.content}>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://www.twitter.com/7odaGeek">{title}</a>
          , Designed By <a href="https://dribbble.com/realvjy">vijay verma</a>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
