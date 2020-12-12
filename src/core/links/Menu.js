import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';

const isActive = (history, path) =>{
      if(history.location.pathname === path){
            return{
                  backgroundColor: '#edebe9',
                  color: '#333333'
            }
       
      }else{
            return {
                  backgroundColor: '#f8f9fa',
                  color: '#333333'
            }
      }
}

const Menu = ({ history }) =>{
      return(
            <div className="align-items-stretch bg-light">
                  <div id="sidebar" className="sidebar p-0 m-0">
                        <div className="text-primary text-uppercase px-3 px-lg-4 py-4 headings-font-family">MENU</div>
                        <ul className="sidebar-menu list-unstyled">
                              <li className="sidebar-list-item">
                                    <Link to="/Schedule" style={isActive(history, '/Schedule')} 
                                    className="sidebar-link text-muted">
                                          <span className="icon-calendar text-primary"></span>
                                          <span className="text-xs text-dark">&nbsp;Schedule</span>
                                    </Link>
                              </li>
                              <li className="sidebar-list-item">
                                    <Link to="/Tasks" style={isActive(history, '/Tasks')} className="sidebar-link text-muted">
                                          <span className="icon-tasks text-primary"></span>
                                          <span className="text-xs text-dark">&nbsp;Tasks</span>
                                    </Link>
                              </li>
                              <li className="sidebar-list-item">
                                    <Link to="/Livestock" style={isActive(history, '/Livestock')} className="sidebar-link text-muted ">
                                          <span className="icon-goat text-primary"></span>
                                          <span className="text-xs text-dark">&nbsp;Livestock</span>
                                    </Link>
                              </li>
                              <li className="sidebar-list-item">
                                    <Link to="/Crops" style={isActive(history, '/Crops')} className="sidebar-link text-muted ">
                                          <span className="icon-goat text-primary"></span>
                                          <span className="text-xs text-dark">&nbsp;Crops</span>
                                    </Link>
                              </li>
                              <li className="sidebar-list-item">
                                    <Link to="/Equipment" style={isActive(history, '/Equipment')} className="sidebar-link text-muted">
                                          <span className="icon-toys text-primary"></span>
                                          <span className="text-xs text-dark">&nbsp;Equipment</span>
                                    </Link>
                              </li>
                              <li className="sidebar-list-item">
                                    <Link to="/Accounting" style={isActive(history, '/Accounting')} className="sidebar-link text-muted">
                                          <span className="icon-calculator text-primary"></span>
                                          <span className="text-xs text-dark">&nbsp;Accounting</span>
                                    </Link>
                              </li>
                              <li className="sidebar-list-item">
                                    <Link to="/Market" style={isActive(history, '/Market')} className="sidebar-link text-muted">
                                          <span className="icon-institution text-primary"></span>
                                          <span className="text-xs text-dark">&nbsp;Market</span>
                                    </Link>
                              </li>
                              <li className="sidebar-list-item">
                                    <Link to="/Contacts" style={isActive(history, '/Contacts')} className="sidebar-link text-muted">
                                          <span className="icon-contact_phone text-primary"></span>
                                          <span className="text-xs text-dark">&nbsp;Contact</span>
                                    </Link>
                              </li>
                              <li className="sidebar-list-item">
                                    <Link to="/Farm_map" style={isActive(history, '/Farm_map')} className="sidebar-link text-muted">
                                          <span className="icon-map-marker text-primary"></span>
                                          <span className="text-xs text-dark">&nbsp;Farm Map</span>
                                    </Link>
                              </li>
                              <li className="sidebar-list-item">
                                    <Link to="/Reports" style={isActive(history, '/Reports')} className="sidebar-link text-muted">
                                          <span className="icon-pie-chart text-primary"></span>
                                          <span className="text-xs text-dark">&nbsp;Reports</span>
                                    </Link>
                              </li>
                        </ul>
                  </div>
            </div>
      )
}




export default withRouter(Menu);