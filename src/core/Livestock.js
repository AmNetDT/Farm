import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LivestockMenu from './links/LivestockMenu';
import Animals from './Livestocks/Animals';
import Grazing from './Livestocks/Grazing';
import Groups from './Livestocks/Groups';
import Inventory from './Livestocks/Inventory';

const Livestock = () => {
    return (
        <BrowserRouter>
            <div className="container m-0">
                <div className="row">
                    <LivestockMenu />

                    <Switch>
                        <Route exact path='/Animals' component={ Animals } />
                        <Route path='/Grazing' component={Grazing} />
                        <Route path='/Groups' component={Groups} />
                        <Route path='/Inventory' component={Inventory} />
                    </Switch>

                </div>
            </div>
        </BrowserRouter>
    )
}


export default Livestock;