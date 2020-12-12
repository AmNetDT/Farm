import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CommandBar = () => {
    return (
        <div className="row m-4">
            <div className="container">

                <Link to="#" className="btn-primary text-white p-2">New Animal</Link>
                <Link to="#" className="btn-default border ml-1 p-2">New Group</Link>
                <Link to="#" className="btn-default border ml-1 p-2">
                    <span className="icon-cloud-upload"></span>
                </Link>

            </div>
        </div>
    );
};


const Animals = () => {
    return (
        <Col xs md lg={8}>
            <Row>
                <Col>
                    { CommandBar() }
                </Col>
            </Row>
        </Col>
    )
}


export default Animals