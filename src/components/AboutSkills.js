import React from 'react'
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

    return (
        <>
            <List
                style={{color:'white'}}
                component="nav"
                className={classes.root}
            >
                {listItems.map((item, index) => {
                    if(item.expan) 
                    {
                        return <>
                                <ListItem button onClick={handleClick}>
                                    <ListItemIcon style={{color:'white'}}>
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
                                            <ListItemText primary={item.firstText} />
                                        </ListItem>

                                    {item.secondText 
                                    ?   <ListItem button className={classes.nested}>
                                            <ListItemIcon>
                                            <StarBorder />
                                            </ListItemIcon>
                                            <ListItemText primary={item.secondText} />
                                        </ListItem>
                                    : console.log('No Third Item')
                                    }
                                    

                                    </List>
                                </Collapse>
                                </>
                    } else {
                        return <ListItem button key={index}>
                                    <ListItemIcon style={{color:'white'}}>
                                        {item.listIcon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.listText} />
                                </ListItem>
                    }    
                })}    
            </List>  
        </>
    )
}

export default AboutSkills

/*<ListItem button>
                    <ListItemIcon style={{color:'white'}}>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sent mail" />
                </ListItem>
                
                <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItem>
                
                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                            <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItem>
                    </List>
                </Collapse> */