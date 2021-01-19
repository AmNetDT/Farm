import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Finance from './core/Finance';
import Contacts from './core/Contacts';
import Equipment from './core/Resources/Inventory';
import Farm_map from './core/Farm_map';
import Livestock from './core/Livestock';
import Crops from './core/Crops';
import Sales from './core/Sales';
import Reports from './core/Reports';
import Schedule from './core/Schedule';
import Task from './core/Task';
import Heading from './core/links/Heading';
import Login from './privacy/Login';
import Menu from './core/links/Menu';
import NotFound from './core/NotFound';
import { Row, Col } from 'react-bootstrap'

const copyright = new Date().getFullYear();

const Routes = () => {
    
    return(
        
        <Router>
            <Heading />

           
            
            <Row className="mx-0 px-0 mt-2 bg-white" style={{ height: '84vh', width: '100vw' }}>
                    <div className="m-0 p-0 bg-light" style={{height: '84vh', width:'12vw'}}>
                    <Menu />
                    </div>
                <div className="m-0 mt-5 p-0" style={{ height: '84vh',  width: '88vw' }}>
                    <Switch>
                        <Route exact path='/' component={ Login } />
                        <Route exact path='/Finance' component={ Finance } />
                        <Route exact path='/Contacts' component={Contacts} />
                        <Route exact path='/Equipment' component={Equipment} />
                        <Route exact path='/Farm_map' component={Farm_map} />
                        <Route exact path='/Livestock' component={Livestock} />
                        <Route exact path='/Crops' component={Crops} />
                        <Route exact path='/Sales' component={Sales} />
                        <Route exact path='/Reports' component={Reports} />
                        <Route exact path='/Schedule' component={Schedule} />
                        <Route exact path='/Task' component={Task} />
                        <Route exact path='/404' component={ NotFound } />
                        <Redirect to="/404" />
                    </Switch>  
                    </div>
                </Row>   
  
            <footer className="mx-0 mt-3 px-0 pt-3 bg-light">
                <Col className="py-3 text-center bg-light">Copyright &copy; {copyright}.</Col>
            </footer>
        </Router>
        
    )
    
}

export default Routes