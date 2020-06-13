import React from 'react'
import avatar from '../Imgs/avatar.png'
import { 
    Box, Grid, Typography, Avatar,  
    } from '@material-ui/core'
import Typed from 'react-typed'
import Styles from './Styles'


const Header = () => {
    const classes = Styles()
    return (
        <Box className={classes.headerBox}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt='ProfilePic'></Avatar>
            </Grid>
                <Typography variant='h4'>
                    <Typed 
                    className={classes.headConfig}
                    strings={['Junaid Razaq']}
                    typeSpeed={10}
                    />
                </Typography>
                <Typography variant='h6'>
                    <Typed
                    className={classes.headText}
                    strings={[
                        'Welcome to my Portfolio',
                        'I am a Web Developer']}
                    typeSpeed={30}
                    backSpeed={40}
                    loop
                    />
                </Typography>
        </Box>
    )
}

export default Header
