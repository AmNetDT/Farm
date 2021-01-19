import React from 'react';
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
            <div className="bg-light mt-5 pt-4">
                        <ul className="sidebar-menu list-unstyled">
                              <li className="sidebar-list-item">
                                    <Link to="/Schedule" style={isActive(history, '/Schedule')} 
                                    className="sidebar-link text-muted">
                                          <span className="icon-calendar text-primary"></span>
                                          <span className="text-xs text-dark">&nbsp;Schedule</span>
                                    </Link>
                              </li>
                              <li className="sidebar-list-item">
                              <Link to="/Task" style={isActive(history, '/Task')} className="sidebar-link text-muted">
                                          <span className="icon-tasks text-primary"></span>
                                          <span className="text-xs text-dark">&nbsp;Task Mgt</span>
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
                                    <span className="icon-leaf text-primary"></span>
                                    <span className="text-xs text-dark">&nbsp;Crops</span>
                              </Link>
                        </li>
                        <li className="sidebar-list-item">
                              <Link to="/Manufacturing" style={isActive(history, '/Manufacturing')} className="sidebar-link text-muted ">
                                    <span className="icon-leaf text-primary"></span>
                                    <span className="text-xs text-dark">&nbsp;Manufacturing</span>
                              </Link>
                        </li>
                        <li className="sidebar-list-item">
                              <Link to="/Resources" style={isActive(history, '/Resources')} className="sidebar-link text-muted">
                                    <span className="icon-toys text-primary"></span>
                                    <span className="text-xs text-dark">&nbsp;Resources</span>
                              </Link>
                        </li>
                              <li className="sidebar-list-item">
                              <Link to="/Finance" style={isActive(history, '/Finance')} className="sidebar-link text-muted">
                                          <span className="icon-calculator text-primary"></span>
                                          <span className="text-xs text-dark">&nbsp;Finance</span>
                                    </Link>
                        </li>
                        <li className="sidebar-list-item">
                              <Link to="/Sales" style={isActive(history, '/Sales')} className="sidebar-link text-muted">
                                    <span className="icon-institution text-primary"></span>
                                    <span className="text-xs text-dark">&nbsp;Sales</span>
                              </Link>
                        </li>
                        <li className="sidebar-list-item">
                              <Link to="/HRM" style={isActive(history, '/HRM')} className="sidebar-link text-muted">
                                    <span className="icon-toys text-primary"></span>
                                    <span className="text-xs text-dark">&nbsp;HRM</span>
                              </Link>
                        </li>
                        
                              <li className="sidebar-list-item">
                                    <Link to="/Farm_map" style={isActive(history, '/Farm_map')} className="sidebar-link text-muted">
                                          <span className="icon-map-marker text-primary"></span>
                                          <span className="text-xs text-dark">&nbsp;Land Mgt</span>
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
      )
}




export default withRouter(Menu);