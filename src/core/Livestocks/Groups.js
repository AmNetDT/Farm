import React, { useState } from 'react';
import { Modal } from '../Modals/AnimalsModal';
import { GlobalStyle } from '../CSS/GlobalStyle';
import '../CSS/StyleSheet.css'
import { Row, Col, Table, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const Groups = () => {
    const [showGroupModal, setShowGroupModal] = useState(false);
    const [showLivestockGroupModal, setShowLivestockGroupModal] = useState(false);


    const openGroupModal = () => {
        setShowGroupModal(prev => !prev);
    };
    const openLivestockGroupModal = () => {
        setShowLivestockGroupModal(prev => !prev);
    };




    return (
        <React.Fragment>
            <Col className="m-0 p-0" style={{ width: '70vw', height: '85vh' }}>
                <Row className="mt-4 mx-0 p-0">
                    <p className="TitleFont">Livestock Groups</p>
                </Row>
                <Row>
                    <Col md={5} className="my-3">
                        <Button className="CommandButton" onClick={openGroupModal}>New Livestone Group</Button>
                        
                    </Col>
                    <Col md={7} className="my-3">
                        <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Search" />

                        </Form.Group>
                        </Form>
                    </Col>
                </Row>
                 <Row>
                    <Col>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Animal</th>
                                    <th>Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><Link to="#" onClick={openLivestockGroupModal}>FourLegs</Link></td>
                                    <td><Link to="#" onClick={openLivestockGroupModal}>100</Link></td>
                                    <td>Goat</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                               
                            </tbody>
                        </Table>
                    </Col>
                </Row>


            </Col>
            <Modal showGroupModal={showGroupModal} setShowGroupModal={setShowGroupModal} />
            <Modal showLivestockGroupModal={showLivestockGroupModal} setShowLivestockGroupModal={setShowLivestockGroupModal} />
            <GlobalStyle />
        </React.Fragment>


    )
}


export default Groups