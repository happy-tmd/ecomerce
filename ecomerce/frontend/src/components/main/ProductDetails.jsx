import { AddShoppingCartOutlined } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

export default function ProductDetails() {
  return (
    <Box sx = {{display:"flex" , alignItems: "center", gap : 2.5 ,flexDirection :  {xs : "column" , sm:"row"}}}>
      <Box>
        <img width = {300} src = "Images\1.jpg" alt ="" />

      </Box>
      <Box sx ={{textAlign: {xs:"center" , sm:"left"}}}>
      <Typography variant="h5">
         WOMEN's fashion
        </Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
        $12.99</Typography>
        <Typography variant="body1">
        schsufusfgusgfd sgfusgdfusdf shgsufdh</Typography>
        <Stack sx ={{alignContent : {xs: "center" , sm: "left"}}} direction={"row"} gap = {1} mt = {1}>

        {["Images/1.jpg", "Images/2.jpg"].map((item) => (
  <img width = {100} height = {100} key={item} src={item} alt="" />
))}


        </Stack>
        <Box mt = {1}>
        <Button 
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" , }}
          variant="contained"

        >
          <AddShoppingCartOutlined sx={{  }} fontSize="small" />
          Buy now
        </Button></Box>
      </Box>
    </Box>
  )
}
