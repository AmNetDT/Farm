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
                        <Link to="/CropPlan" style={isActive(history, '/CropPlan')}
                            className="sidebar-link text-muted">Crop Plan</Link>
                    </li><li className="sidebar-list-item">
                        <Link to="/LocationMap" style={isActive(history, '/LocationMap')}
                            className="sidebar-link text-muted">Location Map</Link>
                    </li><li className="sidebar-list-item">
                        <Link to="/Locations" style={isActive(history, '/Locations')}
                            className="sidebar-link text-muted">Locations</Link>
                    </li><li className="sidebar-list-item">
                        <Link to="/MyCrops" style={isActive(history, '/MyCrops')}
                            className="sidebar-link text-muted">MyCrops</Link>
                    </li>
                </ul>
            </div>
        </div>

    )
}


export default withRouter(LivestockMenu);