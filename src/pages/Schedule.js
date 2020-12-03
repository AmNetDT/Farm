import React from 'react';
import { DefaultButton, PrimaryButton, } from 'office-ui-fabric-react';
import { Pagination, Col, Row, Container } from 'react-bootstrap'
import '../core/Main.css';

export const Schedule = () => {
    return (
        <div class="ms-Grid">
            <div class="ms-Grid-row">
                <div class="ms-Grid-col ms-sm12 ms-lg4">
                    <div class="LayoutPage-demoBlock p-3">
                        <div className="row">
                            <div className="container">

                                <PrimaryButton text="New Activity" /> 
                                <DefaultButton text="New Task" className="ml-1 border-primary" />
                                
                            </div>
                        </div>
                     
                   </div>
                </div>
            </div>
            <Row>
                <Container>
                    <Row>
                        <Col>
                            <Pagination>
                                <Pagination.Prev className="shadow"/>
                                <Pagination.Next className="shadow"/>
                                <DefaultButton text="today" title="today" className="today-button shadow" />
                            </Pagination>
                            
                        </Col>
                        <Col xs={5}>
                            <h3>Nov 29 — Dec 5 2020</h3>
                        </Col>
                        <Col>
                            <DefaultButton text="Month" title="today" className="today-button shadow" />
                            <DefaultButton text="Week" title="today" className="today-button shadow" />
                            <DefaultButton text="Day" title="today" className="today-button shadow" />
                        
                        </Col>
                    </Row>
                </Container>

            </Row>
            
        </div>
    )
}



export default Schedule;