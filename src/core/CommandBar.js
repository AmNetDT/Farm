import * as React from 'react';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { initializeIcons } from '@uifabric/icons';
import { withRouter } from 'react-router-dom';


export const CommandBarBasicExample = () => {
    initializeIcons();
    return (
        <div>
            <CommandBar
                items={_items}
                overflowItems={_overflowItems}
                farItems={_farItems}
                ariaLabel="Use left and right arrow keys to navigate between commands"
               
            />
        </div>
    );
};


const _items = [
    {
        key: 'newItem',
        text: 'New',
        cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
        iconProps: { iconName: 'Add' },
        styles: {
            root: {
                boxSizing: 'border-box',
                border: '1px solid #000000',
                textDecoration: 'none'
            }
        },
        subMenuProps: {
            items: [
                {
                    key: 'emailMessage',
                    text: 'Email message',
                    iconProps: { iconName: 'Mail' }, // optional
                    
                },
                {
                    key: 'calendarEvent',
                    text: 'Calendar event',
                    iconProps: { iconName: 'Calendar' },
                },
            ],
        },
    },
    {
        key: 'upload',
        text: 'Upload',
        iconProps: { iconName: 'Upload' },
        href: 'https://developer.microsoft.com/en-us/fluentui', 
        styles: {
            root: {
                boxSizing: 'border-box',
                border: '1px solid #000000',
                textDecoration: 'none'
            }
        },
    },
    {
        key: 'share',
        text: 'Share',
        iconProps: { iconName: 'Share' },
        onClick: () => console.log('Share'),
        styles: {
            root: {
                boxSizing: 'border-box',
                border: '1px solid #000000',
                textDecoration: 'none'
            }
        },
    },
    {
        key: 'download',
        text: 'Download',
        iconProps: { iconName: 'Download' },
        onClick: () => console.log('Download'),
    },
];

const _overflowItems = [
    { key: 'move', text: 'Move to...', onClick: () => console.log('Move to'), iconProps: { iconName: 'MoveToFolder' } },
    { key: 'copy', text: 'Copy to...', onClick: () => console.log('Copy to'), iconProps: { iconName: 'Copy' } },
    { key: 'rename', text: 'Rename...', onClick: () => console.log('Rename'), iconProps: { iconName: 'Edit' } },
];

const _farItems = [
    {
        key: 'tile',
        text: 'Grid view',
        // This needs an ariaLabel since it's icon-only
        ariaLabel: 'Grid view',
        //iconOnly: true,
        iconProps: { iconName: 'Tiles' },
        onClick: () => console.log('Tiles'),
    },
    {
        key: 'info',
        text: 'Info',
        // This needs an ariaLabel since it's icon-only
        ariaLabel: 'Info',
       // iconOnly: true,
        iconProps: { iconName: 'Info' },
        onClick: () => console.log('Info'),
    },
];

export default withRouter(CommandBarBasicExample);