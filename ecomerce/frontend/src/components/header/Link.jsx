import { ExpandMore } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from '@mui/material'
import React from 'react'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
export default function Link({title}){
  return (
    <Box   sx = {{ position: "relative", display : "flex" , alignItems : "center" 
       ,":hover" : {cursor : "pointer"} ,
        ":hover .show-when-hover" : {display : "block"}}}
    >
        <Typography variant='body1'> {title}</Typography>
        <ExpandMore sx = {{fontSize : "16px" }} />
      
     <Box className='show-when-hover' 
      
       sx={{
         position: "absolute",
         top: "100%", // Place le menu juste en dessous
         mt: 0, // petit espace
         minWidth: "170px",
         left: "50%",
         transform: "translateX(-50%)",
         display: "none",zIndex: 30,
       }}>
      <Paper   
      >
        <nav aria-label='secondary mailbox folders'>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText sx = {{ 
                ".MuiTypography-root " : {fontSize : "15px"}}} primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx = {{  ":hover .sub-link" : {display : "block"} ,position : "relative"}}>
            <ListItemButton>
              <ListItemText sx = {{ 
                ".MuiTypography-root " : {fontSize : "15px"}}} primary="products" /> <KeyboardArrowRightOutlinedIcon  fontSize='small'/>
                 <Box  className = " sub-link border" sx = {{ position : "absolute" , top : 0 , left : "100%", display : "none" }}>
                    <Paper sx = {{ml : 1 , minWidth : 150}}>
                 
                 <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="add product" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="edit product" />
            </ListItemButton>
          </ListItem>
        </List>
       
      </nav> </Paper></Box>
            </ListItemButton>
           
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText sx = {{ 
                ".MuiTypography-root " : {fontSize : "15px"}}} primary="orders" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText sx = {{ 
                ".MuiTypography-root " : {fontSize : "15px"}}} primary="profile" />
            </ListItemButton>
          </ListItem>
         
        </List>
        </nav>
      </Paper></Box>
    </Box>
  );
}