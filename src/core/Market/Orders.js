import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem, PivotLinkSize } from 'office-ui-fabric-react/lib/Pivot';


const Orders = () => {
    return (
        <div className="row m-3">
            <Container>
                <Row>
                    <Col>

                        <Pivot linkSize={PivotLinkSize.medium}>
                            <PivotItem headerText="Settings">
                                <Row>
                                    <Col className="py-4 text-center">




                                    </Col>
                                </Row>
                            </PivotItem>
                            <PivotItem headerText="Home Page">
                                <Label>Pivot #2</Label>
                            </PivotItem>
                            <PivotItem headerText="Gallery">
                                <Label>Pivot #3</Label>
                            </PivotItem>
                            <PivotItem headerText="Look &amp; Feel">
                                <Label>Pivot #3</Label>
                            </PivotItem>
                        </Pivot>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Orders