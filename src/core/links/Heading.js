import React from 'react'
import { Link } from 'react-router-dom'




const Heading = () => {

    return(
      <header className="header sticky">
        <nav className="navbar navbar-expand-lg bg-light" >
          <Link to="#" className="sidebar-toggler mx-4 lead">
            <i className="icon-align-justify text-primary"></i></Link>
          <Link to="/" className="navbar-brand text-uppercase text-dark">KEALUCK ERM</Link>
          <ul className="ml-auto d-flex align-items-center list-unstyled mb-0">

            <li className="nav-item dropdown mr-1"><Link id="notifications" href="#"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ borderRadius: '5px' }}
              className="nav-link dropdown-toggle btn-primary border p-1">
              <i className="icon-user-circle-o text-md"></i></Link>
              
              
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
export default Heading;