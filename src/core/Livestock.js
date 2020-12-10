import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LivestockMenu from './links/LivestockMenu';
import Animals from './Livestocks/Animals';
import Grazing from './Livestocks/Grazing';
import Groups from './Livestocks/Groups';


const Livestock = () => {
    return (
        <BrowserRouter>
            <div className="container m-0">
                <div className="row">
                    <LivestockMenu />

                    <Switch>
                        <Route path='/Animals' exact component={ Animals } />
                        <Route path='/Grazing' exact component={ Grazing } />
                        <Route path='/Groups' exact component={ Groups } />
                    </Switch>

                </div>
            </div>
        </BrowserRouter>
    )
}


export default Livestock;