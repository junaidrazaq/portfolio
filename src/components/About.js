import React from 'react'
import Navbar from './Navbar'
import Particless from './Particles'
import { Box, Grid, Typography, Container, 
    } from '@material-ui/core'
import { Random } from 'react-animated-text';
import Styles from './Styles'
import AboutSkills from './AboutSkills';
import aboutImg from '../Imgs/aboutImg.jpg'

const About = () => {
    const classes = Styles()
    const color = {
        // message: 'My name is Junaid Razaq and I am a Web Developer',
        // message: 'I am a 24 Year old Web Developer from Birmingham, Uk. I have gained experience of Web Development through both University, and self-teaching for the past 2-years. I have managed to not only gain skills and expertise in this profession, but also apply them to create projects which can prove my level of ability. From working with ReactJS, React-Native, JavaScript, HTML, CSS, to working with DataBases such as FireBase and NoSQL.',
        message: 'I am a 24 Year old Web Developer from Birmingham, UK',

        colors: [
                    'aqua',
                    'plum',
                    'pink',
                    // 'yellow',
                    // '#15db95'
                ]
    }


    const colorText = ( message, colors ) => {
        let mesge = []
        let colorIndex = 0
        for (let i = 0; i < message.length; i++){
        mesge[i] = (
            <Typography key={i} variant='h6' className={classes.aboutColHead} style={{ color: colors[colorIndex % 3],}}>
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
            <Box>
                <Container maxWidth='sm'>
                    <Box className={classes.aboutBox}>
                            {colorText(color.message, color.colors)}
                    </Box>
                        <Grid container alignItems='center'>
                            <Grid item xs={6} className={classes.aboutSkillsCon}>
                                <Typography variant='h5' className={classes.aboutHead}>Skills</Typography>
                                <AboutSkills/>
                            </Grid>
                            <Grid item xs={6}>
                                <Container className={classes.aboutAbout}>
                                    <Typography className={classes.aboutAboutText}>
                                        The skills i have, have been aquired from
                                        University and self-teaching for the past
                                        2-years. My portfolio of projects demonstrates
                                        the skills listed here and proves my level of 
                                        ability. From working with ReactJS, 
                                        React-Native, JavaScript, HTML, CSS, to working 
                                        with DataBases such as FireBase and NoSQL.
                                    </Typography>
                                </Container>
                            </Grid>
                        </Grid>
                </Container>
            </Box>
        </>
    )
}

export default About