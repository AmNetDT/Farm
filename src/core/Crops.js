import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CropMenu from './links/CropMenu';
import MyCrops from './Crop/MyCrops';
import LocationMap from './Crop/LocationMap';
import Locations from './Crop/Locations';
import CropPlan from './Crop/CropPlan';


const Crops = () => {
    return (
        <BrowserRouter>
        <div className="container m-0">
            <div className="row">
                    <CropMenu />
                
                    <Switch>
                        <Route path='/MyCrops' exact component={ MyCrops } />
                        <Route path='/LocationMap' exact component={ LocationMap } />
                        <Route path='/Location' exact component={ Locations } />
                        <Route path='/CropPlan' exact component={ CropPlan } />
                    </Switch>
                
            </div>
        </div>
        </BrowserRouter>
    )
}


export default Crops;