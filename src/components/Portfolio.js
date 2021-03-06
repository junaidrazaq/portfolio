import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Box, Grid, Card, CardMedia, CardActionArea, Typography, CardContent, CardActions, Button } from '@material-ui/core'
import Styles from './Styles'
import { Random } from 'react-animated-text'
import { projectSections } from './ListItems' 
import { Waypoint } from 'react-waypoint';



const Portfolio = () => {
    const classes = Styles()

    const project = () => {
        const openProject = (key) => {
            key==1 
            ? window.location.href='https://junaidrazaq.github.io/junaid/Projects/weatherApp/index.html'
            : key==2 
            ? window.location.href='https://junaidrazaq.github.io/junaid/Projects/todoApp/index.html'
            : key==3 
            ? window.location.href='https://junaidrazaq.github.io/junaid/Projects/RockPaperScissors/index.html'
            : key==4 
            ? window.location.href='https://junaidrazaq.github.io/junaid/Projects/calculator/calculator.html'
            : alert('Download the Expo App on your Mobile Device and proceed to scan the QR code to View App')
        }

    return ( <>
            {projectSections.map((item, key)=>(
                <Grid item xs={12} sm={8} md={4} style={{zIndex:2}} key={key}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt={key}
                            height='240'
                            image={item.image}
                            className={classes.cardImage}
                            onClick={() => openProject(key)}
                            />
                            <CardContent style={{textAlign:'center'}}>
                                <Typography gutterBottom variant='h5'>
                                    {item.head}
                                </Typography>
                                <Typography variant='body2' color="textSecondary" component="p">
                                    {item.projectText}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                {/* <Button size="small" color="primary">
                                    Share
                                </Button> */}
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
    </>)}
    
    const [styled, setStyled] = useState()

    // useEffect(() => {
    //     let isMounted = true; // note this flag denote mount status
    //     style().then(data => {
    //       if (isMounted) setStyled(data);
    //     })
    //     return () => { isMounted = false }; // use effect cleanup to set flag false, if unmounted
    //   });
    
    const handleWaypointLeave = () => (
        setStyled(false)
    )

        const style = () => (
            styled==false
            ? {
                position:'fixed',
                width:'100%',
                zIndex:99
            }
            : {position:'relative'}
        )

    return (
        <>
        <Waypoint
        onLeave={handleWaypointLeave}
        >
        <div style={style()}>
            <Navbar/>
        </div>
        </Waypoint>

        {/* <Navbar/> */}
        <Box style={{position:'relative'}}>
            <Box component='div'>
                <Typography align='center' className={classes.portTitle}>
                    <Random 
                    className={classes.portTitle}
                    text="PORTFOLIO"
                    effect='pop'
                    effectChange={.8}
                    effectDuration={1.3}
                    />
                </Typography>
                <Grid container justify='center' alignItems='center' style={{padding:20}}>
                    {project()}
                </Grid>
            </Box>
        </Box>
        </>
    )
}

export default Portfolio
