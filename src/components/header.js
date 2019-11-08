import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="container-fluid header-div">

   <div className="animated slideInDown delay-1s row justify-content-between header-inner-div">

     <div className="col-lg-2"></div>
    <div className="col-lg-8 text-right">
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
