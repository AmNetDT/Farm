import React, { useState } from 'react';
import { Modal } from '../Modals/AnimalsModal';
import { GlobalStyle } from '../CSS/GlobalStyle';
import '../CSS/StyleSheet.css' 
import { Link } from 'react-router-dom'
import { Row, Col, Card, Table, Button, Form } from 'react-bootstrap';


const Animals = () => {
    const [showModal, setShowModal] = useState(false);
    const [showAnimalModal, setShowAnimalModal] = useState(false);
    const [showGroupModal, setShowGroupModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };
    const openGroupModal = () => {
        setShowGroupModal(prev => !prev);
    };
    const openAnimalModal = () => {
        setShowAnimalModal(prev => !prev);
    };
    


    return (
        <React.Fragment>
            <Col className="m-0 p-0" style={{ width: '70vw', height: '85vh'}}>
                <Row className="mt-4 mx-0 p-0">
                    <p className="TitleFont">Animals</p>
                </Row>
                    <Row>
                        <Col md={5} className="my-3">
                        <Button className="CommandButton" onClick={openAnimalModal}>New Animal</Button>
                        <Button className="IconButton" variant="dark" onClick={openGroupModal}>New Group</Button>
                        
                        <Button className="IconButton" variant="secondary" onClick={openModal}>
                            <span className="icon-cloud-upload"></span>
                        </Button>
                        </Col>
                    <Col md={7} className="my-3">
                        <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Search" />

                        </Form.Group>
                            </Form>
                        </Col>
                    </Row>   
                <Row className="my-3">
                    <Col md={4}>
                        <Card style={{ width: '18rem', borderRadius: '1px' }} className="no-shadow border">
                            <Card.Body className="m-0 p-3">
                                <Card.Subtitle className="mb-2 text-muted">ANIMAL TYPES</Card.Subtitle>
                                <Card.Subtitle className="text-sm text-muted text-right">Alpaca (100.00%) &nbsp;<span className="icon-stop text-primary"></span></Card.Subtitle>
                                <Card.Text>
                                    <span className="icon-pie-chart text-primary" style={{ fontSize: '9.2em' }} ></span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '18rem', borderRadius: '1px' }} className="no-shadow border">
                            <Card.Body className="m-0 p-3">
                                <Card.Subtitle className="mb-2 text-muted">BREEDING STATUSES</Card.Subtitle>
                                <Card.Text>
                                    <span className="icon-line-chart text-primary" style={{ fontSize: '10em' }} ></span>
                                </Card.Text>
                            </Card.Body>
                        </Card></Col>
                    <Col md={4}>
                        <Card style={{ width: '18rem', borderRadius: '1px' }} className="no-shadow border">
                            <Card.Body className="m-0 p-3">
                                <Card.Subtitle className="mb-1 text-muted">GRAZING INFO</Card.Subtitle>
                                <Card.Text md={6} style={{float: 'left', width:'50%'}}>
                                    <Card.Title className="text-muted" style={{ fontSize:'5em' }}>0</Card.Title>
                                </Card.Text>
                                <Card.Text md={6} style={{ float: 'left', width: '50%' }}>
                                    <Card.Title className="text-muted" style={{ fontSize: '5em' }}>0</Card.Title>
                                </Card.Text>
                                <footer>
                                    <Link href="#">View Fields Being Grazed &nbsp;&nbsp;<span className="icon-keyboard_arrow_right"></span></Link>
                                </footer>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Animal</th>
                                    <th>Type</th>
                                    <th>Gender</th>
                                    <th>Age</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
         
                        
            </Col> 
            <Modal showModal={showModal} setShowModal={setShowModal} />
            <Modal showAnimalModal={showAnimalModal} setShowAnimalModal={setShowAnimalModal} />
            <Modal showGroupModal={showGroupModal} setShowGroupModal={setShowGroupModal} />
            <GlobalStyle />
        </React.Fragment>
                   

    )
}


export default Animals