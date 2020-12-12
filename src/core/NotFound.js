import * as React from 'react';
import { Fragment } from 'react';
import {Col, Row, Container } from 'react-bootstrap';

const NotFound = () => {
    return(
        <Fragment>
        <Container>
            <Row>
                <Col className="text-center m-5">
                    <h3>Page Not Found</h3>
                </Col>
            </Row>
        </Container>
        </Fragment>
    )
}

export default NotFound