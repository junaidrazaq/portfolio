import React, { useState } from 'react'
import { Box, Grid, Typography, Button, TextField} from '@material-ui/core'
import Navbar from './Navbar';
import Styles, { InputField } from './Styles'
import SendIcon from '@material-ui/icons/Send'
import emailjs from 'emailjs-com'

function Contact() {
    const classes = Styles()

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");

    const handleChange = (event) => {
        event.target.name=="name" 
        ? setName(event.target.value)
        : event.target.name=="email" 
        ? setEmail(event.target.value)
        : event.target.name=="message" 
        ? setMessage(event.target.value)
        : console.log("error")
      };

    function sendEmail(e) {
        e.preventDefault()
        emailjs.sendForm('gmail', 'junaidtemplate', e.target, 'user_hEXr2KtjDJJrVdy1OxMro')
      .then((result) => {
          console.log(result.text);
          result.text ==="OK" ? console.log("it worked") : alert("didnt work")
          setName("")
          setMessage("")
          setEmail("")
      }, (error) => {
          console.log(error.text);
      });
    }


    return (
        <Box component='div'>
            <Navbar/>
            <Grid container justify='center'>
                <Box component='form' className={classes.contactContainer} onSubmit={sendEmail}>
                    <Typography variant='h5' className={classes.contactHead}>Contact Me</Typography>
                    <InputField
                    id="name"
                    name="name"
                    fullWidth={true}
                    label="Name"
                    variant="outlined"
                    margin='dense'
                    size='medium'
                    onChange={(e) => handleChange(e)}
                    value={name}
                    />
                    <br/>
                    <InputField
                    id="email"
                    name="email"
                    fullWidth={true}
                    label="Email"
                    variant="outlined"
                    margin='dense'
                    size='medium'
                    onChange={(e) => handleChange(e)}
                    value={email}
                    />
                    <br/>
                    <InputField
                    id="message"
                    name="message"
                    fullWidth={true}
                    label="Enter Message Here"
                    multiline
                    rows={8}
                    variant="outlined"
                    margin='dense'
                    size='medium'
                    onChange={(e) => handleChange(e)}
                    value={message}
                    />
                    <br/>
                    <Button
                    type="submit"
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
