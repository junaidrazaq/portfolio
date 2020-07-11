import React from 'react'
import { Box, Grid, Typography, Button} from '@material-ui/core'
import Navbar from './Navbar';
import Styles, { InputField } from './Styles'
import SendIcon from '@material-ui/icons/Send'

function Contact() {
    const classes = Styles()
    return (
        <Box component='div'>
            <Navbar/>
            <Grid container justify='center'>
                <Box component='form' className={classes.contactContainer}>
                    <Typography variant='h5' className={classes.contactHead}>Contact Me</Typography>
                    <InputField
                    fullWidth={true}
                    label="Name"
                    variant="outlined"
                    margin='dense'
                    size='medium'/>
                    <br/>
                    <InputField
                    fullWidth={true}
                    label="Email"
                    variant="outlined"
                    margin='dense'
                    size='medium'/>
                    <br/>
                    <InputField
                    fullWidth={true}
                    label="Company Name"
                    variant="outlined"
                    margin='dense'
                    size='medium'/>
                    <br/>
                    <Button 
                    variant='outlined' 
                    fullWidth={true} 
                    endIcon={<SendIcon/>} 
                    className={classes.contactButton}>
                        Contact Me
                    </Button>
                </Box>
            </Grid>
        </Box>
    )
}

export default Contact
