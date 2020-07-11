import React from 'react'
import avatar from '../Imgs/avatar.png'
import { 
    Box, Grid, Typography, Avatar, Container,  
    } from '@material-ui/core'
import Typed from 'react-typed'
import Styles from './Styles'

const headerStyles = {
    color:'white',
    backgroundColor:'black',
    borderRadius:12,
    padding:10
}

const Header = () => {
    const classes = Styles()
    return (
        <Container maxWidth='sm' className={classes.headerBox}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt='ProfilePic'></Avatar>
            </Grid>
            <Box style={{marginTop:'-1.5rem'}}>
                <Typography variant='h4' className={classes.headName}>
                    <Typed
                    style={{...headerStyles}}
                    strings={['Junaid Razaq']}
                    typeSpeed={10}
                    />
                </Typography>
                <Typography variant='h6' style={{marginTop:'1rem'}}>
                    <Typed
                    style={{...headerStyles}}
                    strings={[
                        'Welcome to my Portfolio',
                        'I am a Web Developer']}
                        typeSpeed={30}
                        backSpeed={40}
                    loop
                    />
                </Typography>
            </Box>
        </Container>
    )
}

export default Header
