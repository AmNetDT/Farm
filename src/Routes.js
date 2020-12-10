import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
import Inventory from './core/Inventory';


const Routes = () => {
    
    return(
        
        <BrowserRouter>
            <Heading />
            <div className="section" dir="ltr">
                <div className="row m-1 bg-white">
                    <Menu />
                    
                   
                    <Switch>
                        <Route path='/' exact component={Login} />
                        <Route path='/Accounting' exact component={Accounting} />
                        <Route path='/Contacts' exact component={Contacts} />
                        <Route path='/Equipment' exact component={Equipment} />
                        <Route path='/Farm_map' exact component={Farm_map} />
                        <Route path='/Livestock' exact component={Livestock} />
                        <Route path='/Crops' exact component={Crops} />
                        <Route path='/Market' exact component={Market} />
                        <Route path='/Reports' exact component={Reports} />
                        <Route path='/Schedule' exact component={Schedule} />
                        <Route path='/Tasks' exact component={Tasks} />
                        <Route path='/Inventory' exact component={Inventory} />
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