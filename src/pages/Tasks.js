import React from 'react';
import { withRouter } from 'react-router-dom';
import { DefaultButton, PrimaryButton } from '@fluentui/react';
import { Container, Row, Col } from 'react-bootstrap'

const smallBtn = {
        width: 10,
        padding: 0,
        
}

export const Tasks = () => {
    return (
        <Container>
            <Row>
                <Col className="mt-3">
                    <PrimaryButton>New Animal</PrimaryButton>
                    <DefaultButton className="ml-1" text="New Group"/>
                    <DefaultButton className="ml-1" style={smallBtn}><i className="icon-cloud-upload"></i></DefaultButton>
                </Col>
            </Row>
        </Container>
    )
}



export default withRouter(Tasks);