import React from 'react'
import Navbar from './Navbar'
import { Box, Grid, Card, CardMedia, CardActionArea, Typography, CardContent, CardActions, Button } from '@material-ui/core'
import Styles from './Styles'
import { Random } from 'react-animated-text'
import { projectSections } from './ListItems' 
import Particless from './Particles'

const Portfolio = () => {
    const classes = Styles()
    
    const project = () => (
        <>
            {projectSections.map((item, key)=>(
                <Grid item xs={12} sm={8} md={4} style={{zIndex:2}}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt={key}
                            height='240'
                            image={item.image}
                            className={classes.cardImage}
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
    </>
    )

    return (
        <>
        <Navbar/>
        <Box style={{position:'relative'}}>
            <Box component='div' className={classes.portContainer}>
                <Typography align='center' className={classes.portTitle}>
                    <Random 
                    className={classes.portTitle}
                    text="PORTFOLIO"
                    effect='pop'
                    effectChange={.8}
                    effectDuration={1.3}
                    />
                </Typography>
                <Grid container justify='center' alignItems='center' spacing={4} style={{padding:20}}>
                    {project()}
                </Grid>
            </Box>
        </Box>
        </>
    )
}

export default Portfolio
