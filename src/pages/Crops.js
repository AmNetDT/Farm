import React from 'react';
import SubMenu from '../core/SubMenu';
import 'office-ui-fabric-react/lib/Nav';
import { Container, Col, Row } from 'react-bootstrap';
import CommandBar from '../core/CommandBar';
import { withRouter } from 'react-router-dom';



const navLinkGroupsSub = [
    {
        links: [
            {
                name: 'Crops',
                url: './Crops',
                expandAriaLabel: 'Expand Parent link 1',
                collapseAriaLabel: 'Collapse Parent link 1',
                icon: 'News'
            },
            {
                name: 'Locations',
                url: './Locations',
                expandAriaLabel: 'Expand Parent link 2',
                collapseAriaLabel: 'Collapse Parent link 2',
                icon: 'News',
            },
            {
                name: 'Crop Plans',
                url: './Crop_plan',
                expandAriaLabel: 'Expand Parent link 2',
                collapseAriaLabel: 'Collapse Parent link 2',

            },
            {
                name: 'Location Map',
                url: './Location_map',
                expandAriaLabel: 'Expand Parent link 2',
                collapseAriaLabel: 'Collapse Parent link 2',

            }
        ],
    },
];

const Crops = () => {
    return (
        <div className="ms-Grid" Style="margin-left:-25px">
            <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
                         <SubMenu groupSub={ navLinkGroupsSub } />
                    </div>
                    <Container>
                        <Row>
                            <Col className="mt-3">
                                <CommandBar />
                            </Col>
                        </Row>
                    </Container>
            </div>
        </div>
    )
}



export default withRouter(Crops);