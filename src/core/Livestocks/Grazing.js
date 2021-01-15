import React from 'react';
import { Row, Col } from 'react-bootstrap';


const Grazing = () => {
   
    return (
        <Col>
            <Row className="mt-4 mx-0 p-0">
                <p className="TitleFont">Fields Actively being Grazed</p>
            </Row>
                      
                        <Row style={{border: 'dotted 2px #cccccc'}}>
                <Col md={12} className="p-2 text-center" style={{ backgroundColor: '#eeeeee' }}>
                    <p style={{ fontSize: '8em', color: '#cccccc' }}><span className="icon-leaf"></span></p>
                    <p className="text-lg">No fields yet?</p>
                    <p className="text-sm">Add a new field and it will show up here.</p>
                    <p className="text-sm">Then you can select the field to graze animals in</p>
                </Col>
                        </Row>
                   


        </Col>
    )
}


export default Grazing