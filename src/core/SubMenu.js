import * as React from 'react'
import { withRouter } from 'react-router-dom';
import { Nav } from 'office-ui-fabric-react/lib/Nav';


const navStylesSub = {
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

export const SubMenu = ({ groupSub }) => {
    return (
        <Nav
            styles={ navStylesSub }
            groups={ groupSub } />
    );
};


export default withRouter(SubMenu)