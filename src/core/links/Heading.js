import React from 'react'
import { Link, withRouter } from 'react-router-dom'




const Heading = () => {

    return(
      <header className="header sticky">
        <nav className="navbar navbar-expand-lg bg-light" >
          <Link className="sidebar-toggler text-gray-500 mr-4 mr-lg-5 lead">
            <i className="icon-align-justify text-primary"></i></Link>
          <Link to="/" className="navbar-brand text-uppercase text-dark">KEALUCK ERM</Link>
          <ul className="ml-auto d-flex align-items-center list-unstyled mb-0">

            <li className="nav-item dropdown mr-3"><Link id="notifications" href="#"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
              className="nav-link dropdown-toggle text-dark px-1">
              Username (USD)</Link>
              <div aria-labelledby="notifications" className="dropdown-menu">
                <Link to="/" className="dropdown-item">
                <div className="d-flex align-items-center">
                  <div className="icon icon-sm bg-violet text-white"><i className="fab fa-twitter"></i></div>
                  <div className="text ml-2">
                    <p className="mb-0">You have 2 followers</p>
                  </div>
                </div></Link><Link to="/" className="dropdown-item">
                  <div className="d-flex align-items-center">
                    <div className="icon icon-sm bg-green text-white"><i className="fas fa-envelope"></i></div>
                    <div className="text ml-2">
                      <p className="mb-0">You have 6 new messages</p>
                    </div>
                  </div></Link>
                <div className="dropdown-divider"></div>
                <Link to="/" className="dropdown-item text-center">
                  <small className="font-weight-bold headings-font-family text-uppercase">View all notifications</small></Link>
              </div>
            </li>
            <li className="nav-item dropdown ml-auto">
              <Link id="userInfo" href="#" className="nav-link text-primary">
                <span className="icon-sign-out"></span>
              </Link>

            </li>
          </ul>
        </nav>
      </header>
    )
}
export default withRouter(Heading);