import React, { Fragment } from 'react'
import Styles from './Styles'

// ListItems
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from '@material-ui/core/Collapse';
import {listItems} from './ListItems'


const AboutSkills = () => {
    const classes = Styles()

    const [open, setOpen] = React.useState({});
    const handleClick = (id) => {
        setOpen(prevState => ({...prevState, [id]: !prevState[id]}))
    }

    const outputList = () => (
        <>
            <List
                component="nav"
                className={classes.root}
            >
                { //Map through the ListItems and...
                listItems.map((item) => {
                    // {console.log(index)}
                    // if expandable items exist, expand them
                    if(item.expan) 
                    { 
                                  {/* Use fragment instad of <></> because key attribute is required */}
                        return <Fragment key={item.id}>
                                    <ListItem button onClick={() => handleClick(item.id)} className={classes.aboutList}>
                                        <ListItemIcon className={classes.aboutIcon}>
                                            {item.listIcon}
                                        </ListItemIcon>
                                        <ListItemText primary={item.listText}/>
                                        {open ? <ExpandLess /> : <ExpandMore />}
                                    </ListItem>
                                    
                                    <Collapse in={open[item.id]} timeout="auto" unmountOnExit>
                                        {/* {console.log(item.id)} */}
                                        <List component="div" disablePadding>
                                            <ListItem button className={classes.nested}>
                                                <ListItemIcon>
                                                    <StarBorder />
                                                </ListItemIcon>
                                                <ListItemText classes={{primary:classes.expanText}} primary={item.firstText} />
                                            </ListItem>
                                            {   item.secondText //if seconditem exists...
                                                ? <ListItem button className={classes.nested}>
                                                        <ListItemIcon>
                                                        <StarBorder />
                                                        </ListItemIcon>
                                                        <ListItemText classes={{primary:classes.expanText}} primary={item.secondText} />
                                                    </ListItem>
                                                    : console.log('No Third Item')}

                                                {   item.thirdText //if seconditem exists...
                                                ? <ListItem button className={classes.nested}>
                                                        <ListItemIcon>
                                                        <StarBorder />
                                                        </ListItemIcon>
                                                        <ListItemText classes={{primary:classes.expanText}} primary={item.thirdText} />
                                                    </ListItem>
                                                    : console.log('No Third item')} 

                                                    {   item.fourthText //if seconditem exists...
                                                ? <ListItem button className={classes.nested}>
                                                        <ListItemIcon>
                                                        <StarBorder />
                                                        </ListItemIcon>
                                                        <ListItemText classes={{primary:classes.expanText}} primary={item.fourthText} />
                                                    </ListItem>
                                                    : console.log('No Third item')} 

                                        </List>

                                    </Collapse>
                                </Fragment>
                    } else {
                        return <ListItem button className={classes.aboutList} key={item.id}>
                                    <ListItemIcon className={classes.aboutIcon}>
                                        {item.listIcon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.listText} />
                                </ListItem>
                    }    
                })}    
            </List>
        </>
    )
    
    return (
        outputList()
        )
    }

    export default AboutSkills

    // {   item.secondText //if seconditem exists...
    //     ? <ListItem button className={classes.nested}>
    //             <ListItemIcon>
    //             <StarBorder />
    //             </ListItemIcon>
    //             <ListItemText classes={{primary:classes.expanText}} primary={item.secondText} />
    //         </ListItem>
    //         : console.log('No Third Item')}

    //     {   item.thirdText //if seconditem exists...
    //     ? <ListItem button className={classes.nested}>
    //             <ListItemIcon>
    //             <StarBorder />
    //             </ListItemIcon>
    //             <ListItemText classes={{primary:classes.expanText}} primary={item.thirdText} />
    //         </ListItem>
    //         : console.log('No Third Item')} 