// import React from 'react'
import { makeStyles } from '@material-ui/core'
import Background from '../Imgs/pc-back-img.jpg'
import zIndex from '@material-ui/core/styles/zIndex'
// import fonts from 'https://fonts.googleapis.com/css?family=Indie+Flower';

// const centerBox = {
    // position: 'relative',
    // left: '50%',
    // transform: 'translate(-50%)'
// }

/* // Styles for whole app \\ */
const Styles = makeStyles(theme => ({

// Header \\ // \\ // Header \\
    headerBox: {
        position:'relative',
        marginTop:'6rem',
        zIndex:1,
        textAlign:'center',
    },
    avatar: {
        width: theme.spacing(19),
        height: theme.spacing(19),
        margin: theme.spacing(6),
    },
// Header \\ // \\ // Header \\

// Navbar \\ // \\ // Navbar \\ 
    menuSlideContainer: {
        width: 250,
        background: '#777',
        height: '100%'
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
        minHeight:'92vh'
    },
    aboutBox: {
        position:'relative',
        top:10,
        padding:8,
        borderRadius:10,
        backgroundColor:'black',
        textAlign:'center',
        // zIndex:-1,
    },
    aboutHead:{
        color: 'plum',
        textAlign:'center'
    },
    aboutSkillsCon: {
        position:'relative',
        top:20,
    },
    inAboutText:{
        color:'white',
        // display:'inline-block',
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
    aboutColHead:{
        display:'inline-block',
        letterSpacing:7,
    },
    aboutAbout: {
        lineHeight:'.1rem',
        textAlign:'center',
        paddingLeft:'.5rem',
        color:'white',
        marginTop:30
    },
    aboutAboutText: {
        letterSpacing:'.1rem',
        fontSize:'.8rem',
    },
        // AboutSkills \\ // AboutSkills \\
            root: {
                width: '100%',
                // maxWidth: 200
            },
            expanText:{
                fontSize:10,
                color:'#55BCC9'
            },
            aboutList: { color:'pink'},
            aboutIcon:{ color:'plum'},
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
        letterSpacing:'.8rem', 
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