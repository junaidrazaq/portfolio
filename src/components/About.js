import React, { useState } from 'react'
import Navbar from './Navbar'
// import Particless from './Particles'
import { Box, Grid, Typography, 
    } from '@material-ui/core'
import { Random } from 'react-animated-text';
import Styles from './Styles'
import AboutSkills from './AboutSkills';

const About = () => {
    const classes = Styles()
    const [color /*setColor*/] = useState({
        message: 'My name is Junaid Razaq and I am a Web Developer',
        colors: [
            'white',
            'silver',
        ]
    })

    const colorText = ( message, colorr ) => {
        let mesge = []
        for (let i = 0; i < message.length; i++){
         
        colorr[i] = colorr[i % 2]
        mesge[i] = (
            <Typography variant='h5' style={{ color: colorr[i], display:'inline-block'}}>
                <Random 
                    text={message[i]} 
                    effect='jump' 
                    effectChange={.1}
                    effectDuration={1}
                />
            </Typography>
           )}
        return mesge
     }

    return (
        <>
            <Navbar/>
            <Box className={classes.aboutBox}>   
                    {colorText(color.message, color.colors)}
            </Box>
            <Grid container style={{position:'relative' ,top:'17vh', textAlign:'center'}}>
                <Grid item xs={7}>
                    <Typography variant='h5' className={classes.aboutText}>About Me</Typography>
                    <Typography variant='subtitle2' className={classes.centerText}>
                        I am a 24 Year old Web Developer from Birmingham, Uk.
                        I have gained experience of Web Development through 
                        both University, and self-teaching for the past 2-years.
                        I have managed to not only gain skills and expertise in
                        this profession, but also apply them to create projects
                        which can prove my level of ability. From working with
                        ReactJS, React-Native, JavaScript, HTML, CSS, to working
                        with DataBases such as FireBase and NoSQL. 
                    </Typography>
                </Grid> 
                <Grid item xs={5}>
                    <Typography variant='h5' className={classes.aboutText}>Skills</Typography>
                    <AboutSkills/>
                    );
                </Grid>
            </Grid>
        </>
    )
}

export default About
