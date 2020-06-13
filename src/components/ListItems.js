import React from 'react'
import Home from '@material-ui/icons/Home';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import Apps from '@material-ui/icons/Apps';
import ContactMail from '@material-ui/icons/ContactMail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

// Skills list in the About Page
export const listItems = [
    {
        listText: 'Html',
        listIcon: <SendIcon/>
    },
    {
        listText: 'CSS',
        listIcon: <DraftsIcon />
    },
    {
        listText: 'JavaScript',
        listIcon: <InboxIcon />
    },
    {
        listText: 'React',
        firstText:'ReactJs',
        secondText:'React-Native',
        listIcon: <SendIcon/>,
        expan: true
    },
    {
        listText: 'ReactJs',
        listIcon: <DraftsIcon />
    }
    // {
    //     listText: 'React-Native'

    // },
    // {
    //     listText: 'FireBase',

    // },
]

// Menu Items located in the Navbar Page
export const menuItems = [
    {
        listIcon: <Home/>,
        listText: 'Home' ,
        listPath: '/'
    },
    {
        listIcon: <AssignmentInd/>,
        listText: 'About',
        listPath: '/About' 
    },
    {
        listIcon: <Apps/>,
        listText: 'Porfolio' 
    },
    {
        listIcon: <ContactMail/>,
        listText: 'Contact' 
    }
]