import React from 'react'
import Home from '@material-ui/icons/Home';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import Apps from '@material-ui/icons/Apps';
import ContactMail from '@material-ui/icons/ContactMail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
// ProjectImages
import project1 from '../ProjectImgs/p-1.jpg'
import project2 from '../ProjectImgs/p-2.jpg'
import project3 from '../ProjectImgs/p-3.jpg'
import project4 from '../ProjectImgs/p-4.jpg'
import project5 from '../ProjectImgs/p-5.jpg'


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
        listText: 'Porfolio' ,
        listPath: '/Portfolio'
    },
    {
        listIcon: <ContactMail/>,
        listText: 'Contact' 
    }
]

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
        firstText:'React-Router',
        secondText:'React-Native',
        listIcon: <SendIcon/>,
        expan: true
    },
    {
        listText: 'ReactJs',
        listIcon: <DraftsIcon />
    },
    {
        listText: 'ReactJs',
        listIcon: <DraftsIcon />
    },
    {
        listText: 'ReactJs',
        listIcon: <DraftsIcon />
    }
]

// Project sections located in Portfolio Page
export const projectSections = [
    {
        image: project1,
        projectText: "My name is junaid razaq and i come from birmingham and i come from birmingham and i come from birmingham and i come from birmingham and i come from b9rmigam"
    },
    {
        image: project2,
        projectText: "My name is junaid razaq and i come from birmingham and i come from birmingham and i come from birmingham and i come from birmingham and i come from b9rmigam"
    },
    {
        image: project3,
        projectText: "My name is junaid razaq and i come from birmingham and i come from birmingham and i come from birmingham and i come from birmingham and i come from b9rmigam"
    },
    {
        image: project4,
        projectText: "My name is junaid razaq and i come from birmingham and i come from birmingham and i come from birmingham and i come from birmingham and i come from b9rmigam"
    },
    {
        image: project5,
        projectText: "My name is junaid razaq and i come from birmingham and i come from birmingham and i come from birmingham and i come from birmingham and i come from b9rmigam"
    }
]