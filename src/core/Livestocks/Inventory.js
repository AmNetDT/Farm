import React from 'react';
import '../CSS/StyleSheet.css'
import { Row, Col, Table, Container, Button, ButtonToolbar, InputGroup, FormControl, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const Inventory = () => {
   
    return (
        <React.Fragment>
            <Col className="m-0 p-0" style={{ width: '70vw', height: '85vh' }}>
                <Row className="mt-4 mx-0 p-0">
                    <p className="TitleFont">Livestock Inventory</p>
                </Row>
                <Row>
                    <Container className="mx-0 p-0 my-3">
                        <Form>
                        <ButtonToolbar
                            className="justify-content-end"
                            aria-label="Toolbar with Button groups"
                        >
                            <Col md={3}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Search" />
                                   
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <InputGroup className="mb-3" md={3}>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1"><span className="icon-calendar"></span>&nbsp; Form</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Col>
                            <Col md={3}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1"><span className="icon-calendar"></span> &nbsp; To</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Col>
                            <Col md={3}>
                                <Button className="CommandButton" variant="Primary">Update</Button>
                                <Button className="IconButton" variant="secondary"><span className="icon-print"></span></Button>
                            </Col>
                        </ButtonToolbar>
                        </Form>
                    </Container>
                </Row>

                <Row>
                    <Col>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th as={Col} md={8}>ANIMAL TYPE</th>
                                    <th as={Col} md={2}>2020</th>
                                    <th as={Col} md={2}>2021</th>
                                </tr>
                            </thead>
                            <tbody>
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
            
        </React.Fragment>


    )
}


export default Inventory