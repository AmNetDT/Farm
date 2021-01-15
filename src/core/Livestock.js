import React from 'react';
import Animals from './Livestocks/Animals';
import Grazing from './Livestocks/Grazing';
import Groups from './Livestocks/Groups';
import Inventory from './Livestocks/Inventory';
import { Row, Tab, Nav } from 'react-bootstrap';

const livestocklink = [
    {
        name: 'Animals',
        id: 'Animals'

    },
    {
        name: 'Grazing',
        id: 'Grazing'

    },
    {
        name: 'Groups',
        id: 'Groups',

    },
    {
        name: 'Inventory',
        id: 'Inventory',

    },
]

const Livestock = () => {
    
   
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
                        <Tab.Pane eventKey="Animals">
                                <Animals />
                            
                                </Tab.Pane>
                                    <Tab.Pane eventKey="Grazing">
                            
                                <Grazing />
                            
                                </Tab.Pane>
                                    <Tab.Pane eventKey="Groups">
                  
                                <Groups />
                            
                                </Tab.Pane>
                                    <Tab.Pane eventKey="Inventory">
                                <Inventory />
                                                   
                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                </Row>
            </Tab.Container>          
    )
}


export default Livestock