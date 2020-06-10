import React, { useState } from 'react'
import MobileRightMenuSlider from '@material-ui/core/Drawer'
import { 
    Box, AppBar, Toolbar, IconButton, 
    Typography, Avatar, Divider, 
    List, ListItem, ListItemIcon, ListItemText, 
    } from '@material-ui/core'
import avatar from '../Imgs/avatar.png'
import { makeStyles } from '@material-ui/core/styles';
//Icons
import TouchAppOutlinedIcon from '@material-ui/icons/TouchAppOutlined';
import Home from '@material-ui/icons/Home';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import Apps from '@material-ui/icons/Apps';
import ContactMail from '@material-ui/icons/ContactMail';


// CSS Styles //
const useStyles = makeStyles(theme=>({
    menuSlideContainer: {
        width: 250,
        background: '#777',
        height: '100vh'
    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(10),
        height: theme.spacing(10)
    },
    listItem: {
        margin: '10px 0',
        color:'#ddd'
    }
}))

const menuItems = [
    {
        listIcon: <Home/>,
        listText: 'Home' 
    },
    {
        listIcon: <AssignmentInd/>,
        listText: 'Resume' 
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



const Navbar = () => {

    // State for menu sliding in and out
    const [state, setState] = useState({
        // Initial state
        right: false
    })

    
    // Three different ways you can do this.
    /* This option requires configuring the icon button click
    to be => ''onClick={toggleMenu("right", true)}''  */
    const toggleMenu = (slider, open) => () => {
        setState({...state, [slider]: open})
        // setState({ ...state,  [slider]: open})
        console.log(state)
    }

    // Same result as above, but requires the click to 
    // be ''onClick={() => toggleMenu("right", true)}'' 
    /* 
        const toggleMenu = function(slider, open){
        function a(){
            setState({ [slider]: open} )
        } a() } */
    /* 
    function toggleMenu(slider, open) {
        const a = function() {
            setState({ ...state,  [slider]: open})
        } a() } */


    const classes = useStyles();

    //---------- S I D E -- M E N U ----------\\
    const sideMenu = (slider) => (
        <Box component='div' className={classes.menuSlideContainer} onClick={toggleMenu(slider, false)}>
        <Avatar className={classes.avatar} src={avatar} alt='ProfilePic'></Avatar>
        <Divider/> {/* The thin line under the avatar */}
        <List>
            {/* Display each menu link by mapping through them */}
            {menuItems.map((item, key)=>(
            <ListItem button key={key}>
                <ListItemIcon className={classes.listItem}>
                    {item.listIcon}
                </ListItemIcon>
                <ListItemText className={classes.listItem} primary={item.listText}/>
            </ListItem>
            ))}
        </List>
    </Box>
    )



    return (
            <Box component='nav'>
                <AppBar position="static" style={{background: '#222'}}>
                    <Toolbar>
                        <IconButton edge="start" onClick={toggleMenu("right", true)}>
                            <TouchAppOutlinedIcon style={{color:'white'}}/>
                        </IconButton>
                        <Typography>My Portfolio</Typography>
                        <MobileRightMenuSlider anchor="left" open={state.right} onClose={toggleMenu('right', false)}>
                            {sideMenu("right")}
                        </MobileRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
    )
}

export default Navbar
