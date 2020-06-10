import React from 'react'
import avatar from '../Imgs/avatar.png'
import { 
    Box, AppBar, Toolbar, Grid,  
    Typography, Avatar, Divider, makeStyles, 
    } from '@material-ui/core'
import Typed from 'react-typed'

const headStyles = {
    backgroundColor:'black',
    borderRadius:12,
    padding:5,
    color: 'white'
}

// CSS Styles
const useStyles = makeStyles(theme => ({
    box: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)', 
        textAlign:'center',
        // backgroundColor: '#aaa',
        // borderRadius:theme.spacing(4),
        // padding: theme.spacing(1)
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
    headConfig: headStyles
}))

const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.box}>
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
