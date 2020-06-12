import React from 'react'
import Navbar from './Navbar'
import Particless from './Particles'
import { 
    Box, AppBar, Toolbar, Grid,  
    Typography, Avatar, Divider, makeStyles, 
    } from '@material-ui/core'
import { centerBox } from './Header'



const useStyles = makeStyles({
    box: {
        ...centerBox,
        top:'13%'
    },
    headText: {
        color:'white',
        letterSpacing:2,
        paddingTop:10
    }
})


const About = () => {
    const classes = useStyles()

    return (
        <>
            <Navbar/>
            <Box className={classes.box}>
                <Typography variant='h4' className={classes.headText} >About Me</Typography>
            </Box>
            <Particless/>
        </>
    )
}

export default About
