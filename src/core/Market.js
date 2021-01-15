import React from 'react'
import Dashboard from './Market/Dashboard';
import OnlineStore from './Market/OnlineStore';
import Orders from './Market/Orders';
import PickupLocations from './Market/PickupLocations';
import Products from './Market/Products';
import { Row, Tab, Nav } from 'react-bootstrap';


const marketlink = [
    {
        name: 'Dashboard',
        id: 'Dashboard'

    },
    {
        name: 'Products',
        id: 'Products',

    },
    {
        name: 'Online Store',
        id: 'OnlineStore'

    },
    {
        name: 'Orders',
        id: 'Orders',

    },
    {
        name: 'Pick Up Locations',
        id: 'PickupLocations'
    }
]

const Market = () => {

    return (
        <Tab.Container id="market-links" defaultActiveKey="Dashboard" className="m-0 p-0">
            <Row className="m-0 p-0" >
                <div className="m-0 p-0"
                    style={{ backgroundColor: '#edebe9', height: '85vh', width: '12vw' }}>

                    <Nav variant="pills" className="flex-column m-0" >
                        {marketlink.map(({ name, id }) => (
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
                        <Tab.Pane eventKey="Dashboard">
                            <Dashboard />

                        </Tab.Pane>
                        <Tab.Pane eventKey="Products">
                            <Products />

                        </Tab.Pane>
                        <Tab.Pane eventKey="OnlineStore">

                            <OnlineStore />

                        </Tab.Pane>
                        <Tab.Pane eventKey="Orders">

                            <Orders />

                        </Tab.Pane>
                        <Tab.Pane eventKey="PickupLocations">
                            <PickupLocations />

                        </Tab.Pane>
                    </Tab.Content>

                </div>
            </Row>
        </Tab.Container>
    )
}



export default Market