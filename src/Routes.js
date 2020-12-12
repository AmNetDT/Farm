import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Accounting from './core/Accounting';
import Contacts from './core/Contacts';
import Equipment from './core/Equipment';
import Farm_map from './core/Farm_map';
import Livestock from './core/Livestock';
import Crops from './core/Crops';
import Market from './core/Market';
import Reports from './core/Reports';
import Schedule from './core/Schedule';
import Tasks from './core/Tasks';
import Heading from './core/links/Heading';
import Login from './privacy/Login';
import Menu from './core/links/Menu';
import Inventory from './core/Livestocks/Inventory';
import NotFound from './core/NotFound';


const Routes = () => {
    
    return(
        
        <BrowserRouter>
            <Heading />
            <div className="section" dir="ltr">
                <div className="row m-1 bg-white">
                    <Menu />
                    
                   
                    <Switch>
                        <Route exact path='/' component={ Login } />
                        <Route path='/Accounting' component={ Accounting } />
                        <Route path='/Contacts' component={Contacts} />
                        <Route path='/Equipment' component={ Equipment } />
                        <Route path='/Farm_map' component={Farm_map} />
                        <Route path='/Livestock' component={Livestock} />
                        <Route path='/Crops' component={Crops} />
                        <Route path='/Market' component={Market} />
                        <Route path='/Reports' component={Reports} />
                        <Route path='/Schedule' component={Schedule} />
                        <Route path='/Tasks' component={Tasks} />
                        <Route path='/Inventory' component={Inventory} />
                        <Route path='/404' component={ NotFound } />
                        <Redirect to="/404" />
                    </Switch>
            </div>            
        </div>

            <footer className="pt-2 text-center">
                <p>Copyright &copy; 2020</p>
            </footer>
        </BrowserRouter>
        
    )
    
}

export default Routes