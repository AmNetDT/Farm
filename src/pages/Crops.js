import React from 'react';
import { Nav, INavLinkGroup, INavStyles } from 'office-ui-fabric-react/lib/Nav';
import { withRouter } from 'react-router-dom';


const navLinkGroupsSub: INavLinkGroup = [
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

export const Crops = () => {
    return (
        <div className="ms-Grid" Style="margin-left:-25px">
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
                    <div className="LayoutPage-demoBlock">
                        {SubMenu()}
                    </div>
                </div>
                <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg10" >
                    <div className="LayoutPage-demoBlock p-4">
                        <div className="row">
                            <div className="container">
                                <button className="btn btn-primary">New Activity</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default withRouter(Crops);