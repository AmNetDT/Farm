import React from 'react'
import Dashboard from './Sales/Dashboard';
import OnlineStore from './Sales/OnlineStore';
import Orders from './Sales/Orders';
import PickupLocations from './Sales/PickupLocations';
import Products from './Sales/Products';
import { Row, Tab, Nav } from 'react-bootstrap';


const saleslink = [
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

const Sales = () => {

    return (
        <Tab.Container id="market-links" defaultActiveKey="Dashboard" className="m-0 p-0">
            <Row className="m-0 p-0" >
                <div className="m-0 p-0"
                    style={{ backgroundColor: '#edebe9', height: '85vh', width: '12vw' }}>

                    <Nav variant="pills" className="flex-column m-0" >
                        {saleslink.map(({ name, id }) => (
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



export default Sales