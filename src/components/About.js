import React from 'react'
import Navbar from './Navbar'
// import Particless from './Particles'
import { Box, Grid, Typography, Container, 
    } from '@material-ui/core'
import { Random } from 'react-animated-text';
import Styles from './Styles'
import AboutSkills from './AboutSkills';

const About = () => {
    const classes = Styles()
    const color = {
        message: 'My name is Junaid Razaq and I am a Web Developer',
        colors: [
                    'maroon',
                    '#55BCC9',
                    'coral',
                    'red',
                    '#15db95'
                ]
    }


    const colorText = ( message, colors ) => {
        let mesge = []
        let colorIndex = 0
        for (let i = 0; i < message.length; i++){
        mesge[i] = (
            <Typography key={i} variant='h5' style={{ color: colors[colorIndex % 5], display:'inline-block',}}>
                <Random 
                    text={message[i]}
                    effect='jump'
                    effectChange={.2}
                    effectDuration={.7}
                />
            </Typography>
           )
           if (message[i] !== ' ') colorIndex++ //dont change color if space
        }
        return mesge
    }

    return (
        <>
            {/* <Particless/> */}
            <Navbar/>
            <Container maxWidth='xl' className={classes.aboutContainer}>
                <Box className={classes.aboutBox}>
                        {colorText(color.message, color.colors)}
                </Box>
                <Grid container >
                    <Grid item xs={7}>
                        <Typography variant='h5' className={classes.aboutText}>
                            <span className={classes.headColor}>About</span> Me
                        </Typography>
                        <Typography variant='subtitle2' className={classes.inAboutText}>
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

                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default About