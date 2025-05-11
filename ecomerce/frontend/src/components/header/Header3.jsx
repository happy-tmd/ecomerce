import { Box, Button, Container, Drawer, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Stack, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { useTheme } from '@emotion/react';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ElectricBikeOutlinedIcon from '@mui/icons-material/ElectricBikeOutlined';
import LaptopChromebookOutlinedIcon from '@mui/icons-material/LaptopChromebookOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import { Close } from '@mui/icons-material';
// @ts-ignore

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from './Link';

export default function Header3() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
const theme = useTheme()
const [state, setState] = useState({
  top: false,
  left: false,
  bottom: false,
  right: false,
});
const toggleDrawer = (anchor, open) => (event) => {
  if (
    event.type === "keydown" &&
    (event.key === "Tab" || event.key === "Shift")
  ) {
    return;
  }

  setState({ ...state, [anchor]: open });
};

return (
  <Box sx ={{mb : 0}}>
<Container
  disableGutters
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom : "0px",
  }}
  
>
    {/* Categories Menu Button (left) */}
    <Box sx = {{  }} >
      <Button
        className="border"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          width: 222,
          bgcolor: theme.palette.favColor.main,
          color: theme.palette.text.primary, zIndex: 40,
        }}
      >
        <WindowOutlinedIcon />
        <Typography
          sx={{
            padding: 0,
            textTransform: "capitalize",
           
          }}
        >
          Categories
        </Typography>
        <KeyboardArrowRightOutlinedIcon />
      </Button>

      <Menu
  id="basic-menu"
  anchorEl={anchorEl}
  open={open}
  onClose={handleClose}
  disablePortal
  MenuListProps={{
    "aria-labelledby": "basic-button",
  }}
  sx={{ 
    ".MuiPaper-root": {
      width: 200,
      position: "relative",
    
    },
  }}
>

        {/* Menu items */}
        <MenuItem onClick={handleClose}>
          <ListItemIcon><SportsEsportsIcon fontSize="small" /></ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon><ElectricBikeOutlinedIcon fontSize="small" /></ListItemIcon>
          <ListItemText>Bikes</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon><MenuBookOutlinedIcon fontSize="small" /></ListItemIcon>
          <ListItemText>Books</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon><LaptopChromebookOutlinedIcon fontSize="small" /></ListItemIcon>
          <ListItemText>Electronics</ListItemText>
        </MenuItem>
      </Menu>
    </Box>

    {/* Drawer Trigger Button */}
    { useMediaQuery('(min-width:1000px)') &&( <Stack gap ={4}  direction={ "row"}  alignItems = {"center"}><Link title= {"Home"}/>
    <Link title = {"Mega Menu "}/>
    <Link title = {"full screen Menu "} />
    <Link  title = {"User account"}/>
    <Link  title = {"Vnedor  account"}/></Stack>)}
   
    { useMediaQuery('(max-width:1000px)') && (  <IconButton onClick={toggleDrawer("top", true)}>
      <WidgetsOutlinedIcon />
    </IconButton>      )}
    

    {/* Drawer */}
    <Drawer
  anchor="top"
  open={state.top}
  onClose={toggleDrawer("top", false)}
  sx={{
    '& .MuiPaper-root': {
      bgcolor: theme.palette.favColor.main,
      color: theme.palette.text.primary,
    },
  }}
>
  <Box 
    sx={{
      position: "relative",
      width: "100%",
      height: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: 10,
     
      paddingTop: 5,// espace en haut pour éviter le chevauchement
      paddingX: 2,
      paddingBottom: 2,
     
    }}
  >
     <IconButton
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
              position: "absolute",
              top: 0, mt:0,mb:6,
              right: 10,
              
            }}
            onClick={toggleDrawer("top", false)}
          >
            <Close />
          </IconButton>
         

    {/* Accordions */}
    {[
      { mainLink: "Home", sublink: ["Link1", "Link2", "Link3"] },
      { mainLink: "Mega menu", sublink: ["Link1", "Link2", "Link3"]  },
      { mainLink: "user account", sublink: ["Link1", "Link2", "Link3"]  },
      { mainLink: "Vendor  account", sublink: ["Link1", "Link2", "Link3"]  },
    ].map((item, index) => (
      <Accordion key={index} >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{item.mainLink}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {item.sublink.map((sub, i) => (
              <ListItem key={i} disablePadding>
                <ListItemButton>
                  <ListItemText primary={sub} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    ))}
  </Box>
</Drawer>

  </Container></Box>
);
}