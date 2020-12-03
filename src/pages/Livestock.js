import React from 'react';
import { withRouter } from 'react-router-dom';
import { Nav, INavLinkGroup, INavStyles } from 'office-ui-fabric-react/lib/Nav';
import { Container, Row, Col } from 'react-bootstrap';
import CommandBarBasicExample from '../core/CommandBar'


const navLinkGroupsSub: INavLinkGroup = [
    {
        links: [
            {
                name: 'Animal',
                url: './Animal',
                expandAriaLabel: 'Expand Parent link 1',
                collapseAriaLabel: 'Collapse Parent link 1',
                icon: 'News'
            },
            {
                name: 'Groups',
                url: './Groups',
                expandAriaLabel: 'Expand Parent link 2',
                collapseAriaLabel: 'Collapse Parent link 2',
                icon: 'News',
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

const navStylesSub: Partial<INavStyles> = {
    root: {
        height: 650,
        boxSizing: 'border-box',
        overflowY: 'auto',
        background: '#edebe9',
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
    },
};

const SubMenu = () => {
    return (
        <Nav
            styles={navStylesSub}
            ariaLabel="Nav example with nested links"
            groups={navLinkGroupsSub} />
    );
};

export const Livestock = () => {
    return (
        <div className="ms-Grid" Style="margin-left:-25px">
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
                    <div className="LayoutPage-demoBlock">
                        {SubMenu()}
                    </div>
                </div>
                <Container>
                    <Row>
                        <Col className="mt-3">
                            <CommandBarBasicExample />
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}



export default withRouter(Livestock);