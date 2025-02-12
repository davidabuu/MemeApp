import React from 'react';
import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Home } from '@mui/icons-material';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

const Sidebar = () => {
    return (
        <Box>
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="For You"/>
                    </ListItemButton>
                </ListItem>

                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <PeopleAltOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Following"/>
                    </ListItemButton>
                </ListItem>
            </List>

            <Divider />

            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemAvatar>
                            <Avatar />
                        </ListItemAvatar>
                        <ListItemText primary="tiwasavage999"
                            secondary={
                                <React.Fragment>
                                    <Typography>
                                        Tiwa Savage
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </ListItemButton>
                </ListItem>

                <ListItem>
                <ListItemButton>
                        <ListItemAvatar>
                            <Avatar />
                        </ListItemAvatar>
                        <ListItemText primary="funkeakindele"
                            secondary={
                                <React.Fragment>
                                    <Typography>
                                        Funke Akindele
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}

export default Sidebar;
