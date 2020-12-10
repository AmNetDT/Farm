import * as React from 'react'
import CommandBar from '../links/CommandBar';
import { Row, Col } from 'react-bootstrap';




const CropPlan = () => {
    return (
        <Col xs md lg={8}>
            <Row>
                <Col>
                    <CommandBar />
                </Col>
            </Row>
        </Col>
    )
}


export default CropPlan