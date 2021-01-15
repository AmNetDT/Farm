import React, { useState } from 'react';
import { Modal } from '../Modals/MarketModal';
import { GlobalStyle } from '../CSS/GlobalStyle';
import '../CSS/StyleSheet.css' 
import { Row, Col, Table, Container, Button, ButtonToolbar, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const Products = () => {
    const [showModal, setShowModal] = useState(false);
    const [showGroupModal, setShowGroupModal] = useState(false);
    const [showProductsGroupModal, setShowProductsGroupModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    const openGroupModal = () => {
        setShowGroupModal(prev => !prev);
    };
    const openProductsGroupModal = () => {
        setShowProductsGroupModal(prev => !prev);
    };

    return (
        <React.Fragment>
            <Col className="m-0 p-0" style={{ width: '70vw', height: '85vh' }}>
                <Row className="mt-4 mx-0 p-0">
                    <p className="TitleFont">Products</p>
                </Row>
                <Row>
                    <Container className="mx-0 p-0 my-3">
                        <ButtonToolbar
                            className="justify-content-end"
                            aria-label="Toolbar with Button groups"
                        >
                            <Col>
                                <Button className="CommandButton" onClick={openModal}>New Livestone Group</Button>
                                <Button className="IconButton" variant="secondary" onClick={openGroupModal}><span className="icon-cloud-upload"></span></Button>
                            </Col> 
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Search" />

                                </Form.Group>
                            </Col>
                        </ButtonToolbar>
                    </Container>
                </Row>

                <Row>
                    <Col>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Animal</th>
                                    <th>Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td><Link to="#" onClick={openProductsGroupModal}>Fowl</Link></td>
                                    <td><Link to="#" onClick={openProductsGroupModal}>100</Link></td>
                                    <td>Goat</td>
                                </tr>
                                <tr>
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
                                </tr>

                            </tbody>
                        </Table>
                    </Col>
                </Row>

                <Row>
                    <p>Displaying 1 product 
                        <br /><Link to="#">  <span className="icon-cloud-download"></span> Download all Products</Link></p> 
                </Row>
            </Col>
            <Modal showModal={showModal} setShowModal={setShowModal} />
            <Modal showGroupModal={showGroupModal} setShowGroupModal={setShowGroupModal} />
            <Modal showProductsGroupModal={showProductsGroupModal} setShowProductsGroupModal={setShowProductsGroupModal} />
            <GlobalStyle />
        </React.Fragment>


    )
}


export default Products