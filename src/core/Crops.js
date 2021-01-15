import React from 'react';
import CropPlan from './Crop/CropPlan';
import LocationMap from './Crop/LocationMap';
import Locations from './Crop/Locations';
import MyCrops from './Crop/MyCrops';
import { Row, Tab, Nav } from 'react-bootstrap';

const livestocklink = [
    {
        name: 'CropPlan',
        id: 'CropPlan'

    },
    {
        name: 'LocationMap',
        id: 'LocationMap'

    },
    {
        name: 'Locations',
        id: 'Locations',

    },
    {
        name: 'MyCrops',
        id: 'MyCrops',

    },
]

const Crops = () => {


    return (
        <Tab.Container id="livestock-links" defaultActiveKey="Animals" className="m-0 p-0">
            <Row className="m-0 p-0" >
                <div className="m-0 p-0"
                    style={{ backgroundColor: '#edebe9', height: '85vh', width: '12vw' }}>

                    <Nav variant="pills" className="flex-column m-0" >
                        {livestocklink.map(({ name, id }) => (
                            <Nav.Item>
                                <Nav.Link eventKey={id} key={id}>
                                    {name}
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </div>
                <div className="px-5" style={{ overflowY: 'auto', height: '85vh', width: '76vw' }}>
                    <Tab.Content>
                        <Tab.Pane eventKey="CropPlan">
                            <CropPlan />

                        </Tab.Pane>
                        <Tab.Pane eventKey="LocationMap">

                            <LocationMap />

                        </Tab.Pane>
                        <Tab.Pane eventKey="Locations">

                            <Locations />

                        </Tab.Pane>
                        <Tab.Pane eventKey="MyCrops">
                            <MyCrops />

                        </Tab.Pane>
                    </Tab.Content>
                </div>
            </Row>
        </Tab.Container>
    )
}


export default Crops