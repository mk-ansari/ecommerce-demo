import {
    Drawer,
    Box,
    Typography,
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import React, { Dispatch, SetStateAction } from 'react'

interface SidebarProps {
    isDrawerOpen: boolean
    setIsDrawerOpen: Dispatch<SetStateAction<boolean>>
  }


const Sidebar = (props:SidebarProps) => {
    return (
        <Drawer
            anchor="left"
            open={props.isDrawerOpen}
            onClose={() => props.setIsDrawerOpen(false)}
        >
            <Box p={2} width="240px" role="presentation" textAlign="center">
                <Typography variant="h6" component="div">
                    Shopping Categories
                </Typography>
                <List>
                    <Divider />
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Pants" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Shirts" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
