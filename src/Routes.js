import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Finance from './core/Finance';
import Contacts from './core/Contacts';
import Equipment from './core/Equipment';
import Farm_map from './core/Farm_map';
import Livestock from './core/Livestock';
import Crops from './core/Crops';
import Market from './core/Market';
import Reports from './core/Reports';
import Schedule from './core/Schedule';
import Project from './core/Project';
import Heading from './core/links/Heading';
import Login from './privacy/Login';
import Menu from './core/links/Menu';
import NotFound from './core/NotFound';
import { Row } from 'react-bootstrap'


const Routes = () => {
    
    return(
        
        <Router>
            <Heading />

           
            
            <Row className="m-0 p-0 bg-white" style={{ height: '85vh', width: '100vw' }}>
                    <div className="m-0 p-0 bg-light" style={{height: '85vh', width:'12vw'}}>
                    <Menu />
                    </div>
                    <div className="m-0 p-0" style={{ height: '85vh', width: '88vw' }}>
                    <Switch>
                        <Route exact path='/' component={ Login } />
                        <Route exact path='/Finance' component={ Finance } />
                        <Route exact path='/Contacts' component={Contacts} />
                        <Route exact path='/Equipment' component={Equipment} />
                        <Route exact path='/Farm_map' component={Farm_map} />
                        <Route exact path='/Livestock' component={Livestock} />
                        <Route exact path='/Crops' component={Crops} />
                        <Route exact path='/Market' component={Market} />
                        <Route exact path='/Reports' component={Reports} />
                        <Route exact path='/Schedule' component={Schedule} />
                        <Route exact path='/Project' component={Project} />
                        <Route exact path='/404' component={ NotFound } />
                        <Redirect to="/404" />
                    </Switch>  
                    </div>
                </Row>   
  
            <footer>
                <p className="p-2 m-0 text-center">Copyright &copy; 2020</p>
            </footer>
        </Router>
        
    )
    
}

export default Routes