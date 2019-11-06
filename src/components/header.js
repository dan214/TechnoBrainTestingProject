import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >

              
    <nav className="navbar navbar-expand-lg navbar-light">
 

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" title="Home" aria-label="Home" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" title="News" aria-label="News" to="/blogposts">News</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" title="Cpntact" aria-label="Contact" to="/contact">Contact</Link>
                </li>
            </ul>

       </div>
     </nav>
  
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
