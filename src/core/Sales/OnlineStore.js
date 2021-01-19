import React from 'react';
import { Container, Row, Col, Form, InputGroup, FormControl } from 'react-bootstrap'
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import '../CSS/StyleSheet.css' 


const OnlineStore = () => {
    return (
        <div className="row m-3">
            <Container>
                <Row>
                   <Col>
                        <Pivot>
                            <PivotItem headerText="Settings" className="tabSettings">
                                <Form>
                                   <Row className="justify-content-center">
                                                <Col md={4} className="text-right py-2">
                                            Online Farm Shop
                                      </Col>
                                      <Col md={8}>
                                                    <div className="theme-switch-wrapper">
                                                        <label className="theme-switch" for="checkbox">
                                                            <input type="checkbox" id="checkbox" />
                                                            <div className="slider round"></div>
                                                        </label>
                                                    </div>
                                      </Col>
                                    </Row>
                                    <Row className="justify-content-center">
                                        <Col md={4} className="text-right py-2">
                                            Custom Shop Link
                                      </Col>
                                        <Col md={8}>
                                          
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="basic-addon3">
                                                        https://store.kealuck.com/store/
                                                    </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl id="basic-url" aria-describedby="basic-addon3" />
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-center">
                                        <Col md={4} className="text-right">
                                            Sell Products Online
                                      </Col>
                                        <Col md={8}>

                                            <Form.Group as={Row}>
                                               
                                                <Col md={10}>
                                                    <Form.Check
                                                        type="checkbox"
                                                        label="Show products and allow customers to purchase online"
                                                        name="formHorizontalRadios"
                                                        id="formHorizontalRadios1"
                                                    />
                                                    <Form.Check
                                                        type="checkbox"
                                                        label="Enable Quick Pay Allow custuom payment at your farmstand"
                                                        name="formHorizontalRadios"
                                                        id="formHorizontalRadios2"
                                                    />
                                                </Col>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-center">
                                        <Col md={4} className="text-right">
                                            
                                      </Col>
                                        <Col md={8}>

                                            <Form.Group as={Row}>
                                                <Form.Label>
                                                    Payment Methods
                                                </Form.Label>
                                                <Col md={10}>
                                                    <Form.Check
                                                        type="checkbox"
                                                        label="Accept Credit Card"
                                                        name="formHorizontalRadios"
                                                        id="formHorizontalRadios1"
                                                    />
                                                    <Form.Check
                                                        type="checkbox"
                                                        label="Accept Cash"
                                                        name="formHorizontalRadios"
                                                        id="formHorizontalRadios2"
                                                    />
                                                    <Form.Check
                                                        type="checkbox"
                                                        label="Accept Check"
                                                        name="formHorizontalRadios"
                                                        id="formHorizontalRadios2"
                                                    />
                                                </Col>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-center">
                                        <Col md={4} className="text-right">
                                            Delivery Fee (Optional)
                                        </Col>
                                        <Col md={8}>

                                            <Form.Group as={Row}>
                                                <Form.Label>
                                                    Payment Methods
                                                </Form.Label>
                                                <Col md={10}>
                                                    <InputGroup className="mb-3">
                                                        <InputGroup.Prepend>
                                                            <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
                                                        </InputGroup.Prepend>
                                                        <FormControl
                                                            placeholder="0.0"
                                                            aria-label="Username"
                                                            aria-describedby="basic-addon1"
                                                        />
                                                    </InputGroup>
                                                </Col>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-center">
                                        <Col md={4} className="text-right">
                                            Show Contact Information
                                        </Col>
                                        <Col md={8}>

                                            <Form.Group as={Row}>
                                                <Col md={10}>
                                                    <Form.Check
                                                        type="checkbox"
                                                        label="Show Contact Information"
                                                        name="formHorizontalRadios"
                                                        id="formHorizontalRadios2"
                                                    />
                                                </Col>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Form>
                            </PivotItem>
                            <PivotItem headerText="Home Page" className="tabSettings" as={Col}>
                                
                                <Label>Pivot #2</Label>
                            </PivotItem>
                            <PivotItem headerText="Gallery" className="tabSettings">
                                <Label>Pivot #3</Label>
                            </PivotItem>
                            <PivotItem headerText="Look &amp; Feel" className="tabSettings">
                                <Label>Pivot #3</Label>
                            </PivotItem>
                        </Pivot>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default OnlineStore