import React from 'react'
import Transactions from './Finance/Transactions';
import PLStatement from './Finance/PLStatement';
import CashFlow from './Finance/CashFlow';
import {
    BrowserRouter as Router,
    Link,
    Route,
    useRouteMatch, withRouter
} from 'react-router-dom';

const livestocklinks = [
    {
        name: 'Transactions',
        id: 'Transactions'

    },
    {
        name: 'PLStatement',
        id: 'PLStatement'

    },
    {
        name: 'CashFlow',
        id: 'CashFlow',

    }
]

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return {
            backgroundColor: '#ffffff'
        }

    } 
}

const Finance = ({ history }) => {
    const { url, path } = useRouteMatch();

    return (
        <div className="container m-0">
            <div className="row">
                <Router>
                    <div className="align-items-stretch">
                        <div id="sidebar" className="sidebar pt-5 m-0"
                            Style="background-color:#edebe9; height:85vh; width:25vh">
                            <ul className="nav flex-column">
                                { livestocklinks.map(({ name, id }) => (

                                    <li key={id} className="nav-item" >
                                        <Link to={`${url}/${id}`} Style={isActive(history, `${url}/{id}`)}
                                            className="nav-link">{name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>


                    
                    
                    <Route exact path={`${path}/Transactions`}>
                        <Transactions />
                    </Route>
                    <Route path={`${path}/PLStatement`}>
                        <PLStatement />
                    </Route>
                    <Route path={`${path}/CashFlow`}>
                        <CashFlow />
                    </Route>

                </Router>
            </div>
        </div>
    )
}


export default withRouter(Finance);