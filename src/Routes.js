import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Accounting from './pages/Accounting';
import Contacts from './pages/Contacts';
import Crops from './pages/Crops';
import Equipment from './pages/Equipment';
import Farm_map from './pages/Farm_map';
import Livestock from './pages/Livestock';
import Market from './pages/Market';
import Reports from './pages/Reports';
import Schedule from './pages/Schedule';
import Tasks from './pages/Tasks';
import Heading from './core/Heading';
import Login from './privacy/Login';
import Menu from './core/Menu';


const Routes = () => {
    
    return(
        <BrowserRouter>
            <Heading />
            <div className="section bg-white" dir="ltr">
                <div className="row bg-light p-0 m-0">
                    <div className="col-md-2">
                        <Menu />
                    </div>


                
                <div className="col-md-10 bg-white">
                    <Switch>
                            <Route path='/' exact component={Login} />
                            <Route path='/Accounting/' exact component={Accounting} />
                            <Route path='/Contacts/' exact component={Contacts} />
                            <Route path='/Crops/' exact component={Crops} />
                            <Route path='/Equipment/' exact component={Equipment} />
                            <Route path='/Farm_map/' exact component={Farm_map} />
                            <Route path='/Livestock/' exact component={Livestock} />
                            <Route path='/Market/' exact component={Market} />
                            <Route path='/Reports/' exact component={Reports} />
                            <Route path='/Schedule/' exact component={Schedule} />
                            <Route path='/Tasks/' exact component={Tasks} />

                        </Switch>
                    </div>
            </div>            
        </div>
        </BrowserRouter>
        
    )
    
}

export default Routes