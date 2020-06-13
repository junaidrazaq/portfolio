// import React from 'react'
import { makeStyles } from '@material-ui/core'

const centerBox = {
    position: 'absolute',
    left: '50%', marginRight: '-50%',
    transform: 'translate(-50%, -50%)'}

const headStyles = {
    backgroundColor:'black',
    borderRadius:12,
    padding:5, color: 'white'}

// Styles for whole app

const Styles = makeStyles(theme => ({

    // Header \\ // \\ // Header \\
    headerBox: {
        ...centerBox,
        top:'50%',
        textAlign:'center',
    },
    avatar: {
        width: theme.spacing(19),
        height: theme.spacing(19),
        margin: theme.spacing(6),
    },
    headText: {
        color: '#aaa',
        zIndex:1,
        top:'2vh',
        textAlign:'center',
        ...headStyles
    },
    headConfig: headStyles,
    // Header \\ // \\ // Header \\

    // Navbar \\ // \\ // Navbar \\ 
    menuSlideContainer: {
        width: 250,
        background: '#777',
        height: '100vh'
    },
    navatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(10),
        height: theme.spacing(10)
    },
    listItem: {
        margin: '10px 0',
        color:'#ddd'
    },
    // Navbar \\ // \\ // Navbar \\ 

    // AboutSkills \\ // AboutSkills \\
    root: {
        width: '100%',
        maxWidth: 360
    },
    nested: { paddingLeft: theme.spacing(4)},
    // AboutSkills \\ // AboutSkills \\

    // About \\ // About \\ // About \\
    aboutBox: {
        ...centerBox,
        top:'13%',
        color:'white',
        letterSpacing:.1,
        fontSize:20,
        padding:20,
        marginTop:10,
        textAlign:'center',
        zIndex:-1,
        display:'inline-block'
    },
    aboutText:{
        color: 'coral',
        position:'relative',
    },
    centerText:{
        color:'white',
        display:'inline-block',
        lineHeight:1.6,
        paddingLeft:10,
        textAlign:'start',
        marginTop:8
    }}
    // About \\ // About \\ // About \\
))

export default Styles