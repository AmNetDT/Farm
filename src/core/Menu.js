import React from 'react'; 
import { initializeIcons } from '@uifabric/icons';
import { Nav, INavLinkGroup, INavStyles } from 'office-ui-fabric-react/lib/Nav';
import { withRouter } from 'react-router-dom';



const navLinkGroups: INavLinkGroup = [
      {
            links: [
                  {
                        name: 'Schedule',
                        url: './Schedule',
                        expandAriaLabel: 'Expand Parent link 1',
                        collapseAriaLabel: 'Collapse Parent link 1',
                        iconProps: { iconName: 'Download' },
                  },
                  {
                        name: 'Tasks',
                        url: './Tasks',
                        expandAriaLabel: 'Expand Parent link 2',
                        collapseAriaLabel: 'Collapse Parent link 2',
                        iconProps: { iconName: 'Download' },
                  },
                  {
                        name: 'Livestock',
                        url: './Livestock',
                        expandAriaLabel: 'Expand Parent link 2',
                        collapseAriaLabel: 'Collapse Parent link 2',
                        iconProps: { iconName: 'Download' },
                        
                  },
                  {
                        name: 'Crop Production',
                        url: './crops',
                        expandAriaLabel: 'Expand Parent link 2',
                        collapseAriaLabel: 'Collapse Parent link 2',
                        iconProps: { iconName: 'Download' },
                    
                  },
                  {
                        name: 'Equipment',
                        url: './Equipment',
                        expandAriaLabel: 'Expand Parent link 2',
                        collapseAriaLabel: 'Collapse Parent link 2',
                        iconProps: { iconName: 'Download' },
                        
                  },
                  {
                        name: 'Accounting',
                        url: './Accounting',
                        expandAriaLabel: 'Expand Parent link 2',
                        collapseAriaLabel: 'Collapse Parent link 2',
                        iconProps: { iconName: 'Download' },
                        
                  },
                  {
                        name: 'Market',
                        url: './Market',
                        expandAriaLabel: 'Expand Parent link 2',
                        collapseAriaLabel: 'Collapse Parent link 2',
                        iconProps: { iconName: 'Download' },
                        
                  },
                  {
                        name: 'Contacts',
                        url: './Contacts',
                        expandAriaLabel: 'Expand Parent link 2',
                        collapseAriaLabel: 'Collapse Parent link 2',
                        iconProps: { iconName: 'Download' },
                     
                  },
                  {
                        name: 'Farm Map',
                        url: './Farm_map',
                        expandAriaLabel: 'Expand Parent link 2',
                        collapseAriaLabel: 'Collapse Parent link 2',
                        iconProps: { iconName: 'Download' },
                     
                  },
                  {
                        name: 'Report',
                        url: './Report',
                        expandAriaLabel: 'Expand Parent link 2',
                        collapseAriaLabel: 'Collapse Parent link 2',
                        iconProps: { iconName: 'Download' },
                       
                  },
            ],
      },
];
const navStyles: Partial<INavStyles> = {
      root: {
            height: 650,
            width: 218,
            boxSizing: 'border-box',
            overflowY: 'auto',
            marginTop: 0,
            marginLeft: 0,
            marginRight: 0,
            paddingLeft: 0,
            textDecoration: 'none'
      },
};





export const Menu = () => {
      initializeIcons();
      return (
            <Nav
                  styles={ navStyles } 
                  ariaLabel="Nav example with nested links"
                  groups={navLinkGroups} />
      );
};





export default withRouter(Menu);