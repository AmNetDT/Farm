import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Badge } from 'react-bootstrap'




const Heading = () => {

    return(
      <header className="header sticky">
        <nav className="navbar navbar-expand-lg bg-light" >
          <Link to="#" className="sidebar-toggler text-gray-500 mr-4 mr-lg-5 lead">
            <i className="icon-align-justify text-primary"></i></Link>
          <Link to="/" className="navbar-brand text-uppercase text-dark">KEALUCK ERM</Link>
          <ul className="ml-auto d-flex align-items-center list-unstyled mb-0">

            <li className="nav-item dropdown mr-1"><Link id="notifications" href="#"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ borderRadius: '5px' }}
              className="nav-link dropdown-toggle btn-primary border border-primary p-1">
              <i className="icon-user-circle-o text-md"></i></Link>
              <div aria-labelledby="notifications" className="dropdown-menu shadow">
                <Link to="/" className="dropdown-item">
                <div className="d-flex align-items-center">
                    <div className="icon icon-md bg-danger p-1 text-white">
                      <i className="icon-notifications_active"></i>
                    </div>
                  <div className="text ml-2">
                      <p className="mb-0">Notification <Badge variant="secondary" className="ml-5">3</Badge></p>
                  </div>
                </div></Link><Link to="/" className="dropdown-item">
                  <div className="d-flex align-items-center">
                    <div className="icon icon-md bg-dark text-white"><i className="icon-cog"></i></div>
                    <div className="text ml-2">
                      <p className="mb-0">Settings</p>
                    </div>
                  </div></Link>
                <div className="dropdown-divider"></div>
                <Link to="/" className="dropdown-item text-center">
                  <small className="font-weight-bold headings-font-family text-uppercase">View all notifications</small></Link>
              </div>
            </li>
            <li className="nav-item dropdown ml-auto">
              <Link id="userInfo" to="#" style={{ borderRadius:'5px' }}
              className="nav-link btn-danger text-white border p-1">
                <span className="icon-power-off"></span>
              </Link>

            </li>
          </ul>
        </nav>
      </header>
    )
}
export default withRouter(Heading);