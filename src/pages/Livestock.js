import * as React from 'react';
import { withRouter } from 'react-router-dom';
import SubMenu from '../core/SubMenu'
import { initializeIcons } from '@uifabric/icons';
import { Container, Row, Col } from 'react-bootstrap';
import CommandBar from '../core/CommandBar'



const navLinkGroupsSub = [
    {
        links: [
            {
                name: 'Animal',
                url: './Animal',
                expandAriaLabel: 'Expand Parent link 1',
                collapseAriaLabel: 'Collapse Parent link 1',
                iconProps: { iconName: 'Calendar' },        
            },
            {
                name: 'Groups',
                url: './Groups',
                expandAriaLabel: 'Expand Parent link 2',
                collapseAriaLabel: 'Collapse Parent link 2',
                icon: 'News'
            },
            {
                name: 'Grazing',
                url: './Grazing',
                expandAriaLabel: 'Expand Parent link 2',
                collapseAriaLabel: 'Collapse Parent link 2',

            },
            {
                name: 'Inventory',
                url: './Inventory',
                expandAriaLabel: 'Expand Parent link 2',
                collapseAriaLabel: 'Collapse Parent link 2',

            }
        ],
    },
];


const Livestock = () => {
    initializeIcons();
    return (
        <div className="ms-Grid" Style="margin-left:-25px">
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
                        <SubMenu groupSub={navLinkGroupsSub} />
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



export default withRouter(Livestock);