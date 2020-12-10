import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return {
            backgroundColor: 'White',
            color: '#333333'
        }

    } else {
        return {
            backgroundColor: '#edebe9',
            color: '#333333'
        }
    }
}



const LivestockMenu = ({ history }) => {
    return (
        
        <div className="align-items-stretch">
            <div id="sidebar" className="sidebar pt-5 m-0"
                Style="background-color:#edebe9; height:85vh; width:25vh">

                <ul className="sidebar-menu list-unstyled">
                    <li className="sidebar-list-item">
                        <Link to="/Animals" style={isActive(history, '/Animals')}
                            className="sidebar-link text-muted">Animals</Link>
                    </li><li className="sidebar-list-item">
                        <Link to="/Grazing" style={isActive(history, '/Grazing')}
                            className="sidebar-link text-muted">Grazing</Link>
                    </li><li className="sidebar-list-item">
                        <Link to="/Groups" style={isActive(history, '/Groups')}
                            className="sidebar-link text-muted">Groups</Link>
                    </li><li className="sidebar-list-item">
                        <Link to="/Inventory" style={isActive(history, '/Inventory')}
                            className="sidebar-link text-muted">Inventory</Link>
                    </li>
                </ul>
            </div>
        </div>

    )
}


export default withRouter(LivestockMenu);