// import React from 'react'
import { makeStyles } from '@material-ui/core'
import Background from '../Imgs/pc-back-img.jpg'
// import fonts from 'https://fonts.googleapis.com/css?family=Indie+Flower';

const centerBox = {
    position: 'absolute',
    left: '50%', marginRight: '-50%',
    transform: 'translate(-50%, -50%)'}

const headStyles = {
    backgroundColor:'black',
    borderRadius:12,
    padding:5, color: 'white'}

/* // Styles for whole app \\ */
const Styles = makeStyles(theme => ({

// Header \\ // \\ // Header \\
    headerBox: {
        ...centerBox,
        top:'50%',
        zIndex:1,
        textAlign:'center',
    },
    avatar: {
        width: theme.spacing(19),
        height: theme.spacing(19),
        margin: theme.spacing(6),
    },
    headText: {
        color: '#aaa',
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

// About \\ // About \\ // About \\
    aboutContainer: {
        background:'grey',
        // display:'inline-block'
        minHeight:'92vh'
    },
    aboutBox: {
        // ...centerBox,
        top:'13%',
        color:'white',
        letterSpacing:.1,
        fontSize:20,
        padding:20,
        // marginTop:10,
        textAlign:'center',
        // zIndex:-1,
        // display:'inline-block'
    },
    aboutText:{
        color: '#ac3b61',
        position:'relative'
    },
    inAboutText:{
        color:'white',
        display:'inline-block',
        lineHeight:1.7,
        backgroundColor:'grey',
        marginLeft:12,
        padding:10,
        textAlign:'center',
        marginTop:8,
        borderRadius:10
    },
    headColor:{
        color:'black'
    },
        // AboutSkills \\ // AboutSkills \\
            root: {
                width: '100%',
                maxWidth: 360
            },
            expanText:{
                fontSize:12,
                color:'#55BCC9'
            },
            unExpanText:{ marginRight:0 },
            aboutList: { color:'black' },
            aboutIcon:{ color:'maroon' },
            nested: { paddingLeft: theme.spacing(3)},
        // AboutSkills \\ // AboutSkills \\

// About \\ // About \\ // About \\

// Portfolio \\ // Portfolio \\ // Portfolio \\
    portContainer: {
        // background: '#ebf0f6',
        background: 'grey',
        height:'100%',
        zIndex:'-3'
    },
    portTitle: {
        position:'relative',
        top:10,
        letterSpacing:'1.1rem', 
        marginLeft:theme.spacing(2),
        fontSize:'2rem',
        fontFamily:'Libre Baskerville, serif'
    },
    cardContainer: {
        maxWidth: 375,
        margin:'1rem auto'
    },
    cardImage: {
        boxShadow: "0px 4px 1px #9E9E9E",
        borderRadius:1
    },
// Portfolio \\ // Portfolio \\ // Portfolio \\
        
// ParticleJs \\ // ParticleJs \\ // ParticleJs \\
    particlesCanvas: {
        position: 'absolute',
        zIndex:'-1',
        opacity:.7
    }
// ParticleJs \\ // ParticleJs \\ // ParticleJs \\
}
))

export default Styles