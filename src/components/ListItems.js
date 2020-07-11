import React from 'react'
import Home from '@material-ui/icons/Home';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import Apps from '@material-ui/icons/Apps';
import ContactMail from '@material-ui/icons/ContactMail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
// ProjectImages
import project1 from '../ProjectImgs/pro1.jpg'
import project2 from '../ProjectImgs/p-1.jpg'
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
        listText: 'Contact',
        listPath: '/contact'
    }
]

// Skills list in the About Page
export const listItems = [
    {
        id:1,
        listText: 'Html',
        listIcon: <SendIcon/>
    },
    {
        id:2,
        listText: 'CSS',
        expan: true,
        firstText:'BootStrap',
        secondText:'TailWind',
        thirdText:'MaterialUi',
        fourthText:'SaSS',
        listIcon: <DraftsIcon />
    },
    {
        id:3,
        listText: 'JavaScript',
        listIcon: <InboxIcon />
    },
    {
        id:4,
        listText: 'React',
        listIcon: <SendIcon/>,
        expan: true,
        // SubItems
        firstText:'React-Router',
        secondText:'React-Navigation',
        thirdText:'React-Native',
    },
    {
        id:5,
        listText: 'Database',
        listIcon: <DraftsIcon />,
        expan: true,
        // SubItems
        firstText:'FireBase',
        secondText:'SQL',
    },
    {
        id:6,
        listText: 'ReactJs',
        listIcon: <DraftsIcon />
    },
    {
        id:7,
        listText: 'ReactJs',
        listIcon: <DraftsIcon />
    }
]

// Project sections located in Portfolio Page
export const projectSections = [
    {
        head:'React Native Project',
        image: project1,
        projectText: "This React Native project allows users to Register an account and login to the app. Registation requires an Email, a Password, and verification of the Email chosen. Passwords can be reset if forgotten. This app was created using React Native, React Navigation and Firebase."
    },
    {
        head:'Weather App Project',
        image: project2,
        projectText: "Weather app created using HTML, CSS and JavaScript. App uses an API to receive current weather in the User specified area and differentiates the background image in accordance to the weather"
    },
    {
        head:'To Do App',
        image: project3,
        projectText: "To Do list app which allows users to select income and expenses. These inputs not only get displayed to the UI, but also get stored for future calculations whereby a user may choose to remove an input, following an updated UI. Created using HTML, CSS and JavaScript."
    },
    {
        head:'Rock, Paper, Scissors game',
        image: project4,
        projectText: "Rock paper scissors app, which allows User to choose Rock, Paper or scissors and compares it to a randomly generated computer choice. Includes a score which updates accordingly. The game also finishes at a set score and was created using Html, Css and JavaScript"
    },
    {
        head:'Calculator',
        image: project5,
        projectText: "Fully functioning calculator, created with HTML, CSS and Javascript which allows the user to add, subtract, multiply and divide numbers together"
    }
]