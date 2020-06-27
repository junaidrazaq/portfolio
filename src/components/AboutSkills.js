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

    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
      setOpen(!open);
    };

    const outputList = () => (
        <>
            <List
                style={{color:'white'}}
                component="nav"
                className={classes.root}
            >
                {
                listItems.map((item, index) => {
                    // if expandable items exist, show them
                    if(item.expan) 
                    {           {/* Use fragment instad of <></> because key attribute is required */}
                        return <Fragment key={index}>
                                    <ListItem button onClick={handleClick} className={classes.aboutList}>
                                        <ListItemIcon className={classes.aboutIcon}>
                                            {item.listIcon}
                                        </ListItemIcon>
                                        <ListItemText primary={item.listText} />
                                        {open ? <ExpandLess /> : <ExpandMore />}
                                    </ListItem>

                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                        
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
                                        </List>

                                    </Collapse>
                                </Fragment>
                    } else {
                        return <ListItem button className={classes.aboutList} key={index}>
                                    <ListItemIcon className={classes.aboutIcon}>
                                        {item.listIcon}
                                    </ListItemIcon>
                                    <ListItemText classes={{primary:classes.unExpanText}} primary={item.listText} />
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