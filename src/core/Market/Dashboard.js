import React from 'react';
import { Card, Col, Container, Row, ButtonToolbar, InputGroup, FormControl } from 'react-bootstrap'
import '../CSS/StyleSheet.css' 


const Dashboard = () => {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Container className="mx-1 my-3">
                    <ButtonToolbar
                        className="justify-content-end"
                        aria-label="Toolbar with Button groups"
                    >
                            <Col md={6} className="p-0 m-0">
                                <p className="TitleFont">Market Dashboard</p>
                        </Col>
                            <Col md={3} className="p-0 m-0">
                                
                        <InputGroup className="mr-2">
                            <InputGroup.Prepend>
                                    <InputGroup.Text id="btnGroupAddon2"><span className="icon-calendar"></span>&nbsp; Dates &nbsp;</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                type="text"
                                placeholder="Input group example"
                                aria-label="Input group example"
                                aria-describedby="btnGroupAddon2"
                            />
                        </InputGroup>
                                </Col>
                            <Col md={3} className="p-0 m-0">
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="btnGroupAddon2"><span className="icon-calendar"></span>&nbsp;  To &nbsp;</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    type="text"
                                    placeholder="Input group example"
                                    aria-label="Input group example"
                                    aria-describedby="btnGroupAddon2"
                                />
                            </InputGroup>
                                
                            </Col>
                    </ButtonToolbar>
                    </Container>
                </Row>
                <Row>
                    <Col md={4}>
                        <Card className="CardStyle">
                            <Card.Body>
                                <Card.Title><span style={{ fontSize: '2em' }} className="icon-credit-card text-center"></span></Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Total Revenue</Card.Subtitle>
                                <Card.Title>
                                    <h2>$0.00</h2>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="CardStyle">
                            <Card.Body>
                                <Card.Title><span style={{ fontSize: '2em' }} className="icon-shopping-cart text-center"></span></Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Total Revenue</Card.Subtitle>
                                <Card.Title>
                                    <h2>$0.00</h2>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="CardStyle">
                            <Card.Body>
                                <Card.Title><span style={{ fontSize: '2em' }} className="icon-user text-center"></span></Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Total Revenue</Card.Subtitle>
                                <Card.Title>
                                    <h2>$0.00</h2>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col md={4}>
                        <Card className="CardStyle">
                            <Card.Body>
                                <Card.Text><span style={{ fontSize: '0.8em' }}>SALES OVER TIME ($)</span></Card.Text>
                                <Card.Text>
                                    <span className="icon-bar-chart-o" style={{ fontSize: '6em' }} ></span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="CardStyle">
                            <Card.Body>
                                <Card.Text><span style={{ fontSize: '0.8em' }}>TOTAL ORDERS</span></Card.Text>
                                <Card.Text>
                                    <span className="icon-bar-chart-o" style={{ fontSize: '6em' }} ></span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="CardStyle">
                            <Card.Body>
                                <Card.Text><span style={{ fontSize: '0.8em' }}>AVERAGE ORDER VALUE ($)</span></Card.Text>
                                <Card.Text>
                                    <span className="icon-bar-chart-o" style={{ fontSize: '6em' }} ></span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col md={4}>
                        <Card className="CardStyle_">
                            <Card.Body className="m-0 p-0">
                                <Card.Text><span style={{ fontSize: '0.8em' }}>TOP SELLERS</span></Card.Text>
                                <Card.Text>
                                    <span className="icon-folder-open" style={{ fontSize: '4em', color: 'ThreeDLightShadow' }} ></span>
                                    <p className="text-md" style={{ lineHeight: '0.3em' }}>Nothing recorded yet? </p>
                                    <p className="text-sm" style={{ lineHeight: '0.3em' }}>No sales during that timeframe.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="CardStyle_">
                            <Card.Body className="m-0 p-0">
                                <Card.Text><span style={{ fontSize: '0.8em' }}>TOP SELLERS</span></Card.Text>
                                <Card.Text>
                                    <span className="icon-folder-open" style={{ fontSize: '4em', color: 'ThreeDLightShadow' }} ></span>
                                    <p className="text-md" style={{ lineHeight: '0.3em' }}>Nothing recorded yet? </p>
                                    <p className="text-sm" style={{ lineHeight: '0.3em' }}>No sales during that timeframe.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="CardStyle_">
                            <Card.Body className="m-0 p-0">
                                <Card.Text><span style={{ fontSize: '0.8em' }}>TOP SELLERS</span></Card.Text>
                                <Card.Text>
                                    <span className="icon-folder-open" style={{ fontSize: '4em', color: 'ThreeDLightShadow' }} ></span>
                                    <p className="text-md" style={{ lineHeight: '0.3em' }}>Nothing recorded yet? </p>
                                    <p className="text-sm" style={{ lineHeight: '0.3em' }}>No sales during that timeframe.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}


export default Dashboard