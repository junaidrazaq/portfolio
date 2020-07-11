// import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core'
import Background from '../Imgs/pc-back-img.jpg'
import zIndex from '@material-ui/core/styles/zIndex'
import { TextField } from '@material-ui/core'
// import fonts from 'https://fonts.googleapis.com/css?family=Indie+Flower';

const centerBox = {
    position:'absolute',
    left:'50%',
    transform: 'translate(-50%, -50%)',
}


/* // Styles for whole app \\ */
const Styles = makeStyles(theme => ({

// Header \\ // \\ // Header \\
    headerBox: {
        ...centerBox,
        top:'40%',
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
    aboutColHead:{
        display:'inline-block',
        letterSpacing:7,
    },
    aboutAbout: {
        lineHeight:'.1rem',
        textAlign:'center',
        paddingLeft:'.5rem',
        color:'black',
        marginTop:30
    },
    aboutAboutText: {
        letterSpacing:'.1rem',
        fontSize:'.8rem',
    },
        // AboutSkills \\ // AboutSkills \\
            root: {
                width: '100%'
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
        
// Contact \\ // Contact \\ // Contact \\
    contactContainer: {
        ...centerBox,
        top:'50%',
    },
    contactButton:{
        marginTop:'1rem',
        color:'black',
        borderColor:'black'
    },
    contactHead: {
        textAlign:'center'
    },
// Contact \\ // Contact \\ // Contact \\


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


// Contact field configurations
export const InputField = withStyles({
root: {
    //Label Color (eg./Name)
    "& label": {
        color: 'black'
    }, 
    // Label Focused Color (eg./Name)
    "& label.Mui-focused": {
        color:'purple'
    }, 
    //Input text Color
    "& .MuiInputBase-root": {
        color:'purple'
    },
    "& .MuiOutlinedInput-root": {
        //Label Border Color
        "& fieldset": {
            borderColor:'black'
        },
        // Label Border Hover Color
        "&:hover fieldset": {
            borderColor:'purple'
        },
        "& .Mui-focused fieldset": {
            borderColor:'red'
        },
    }
},
})(TextField);