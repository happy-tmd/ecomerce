import React, { useState } from 'react';
import { Container, Stack, Box, Typography, ToggleButton, ToggleButtonGroup, Button, Dialog, IconButton } from '@mui/material';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import { useTheme } from '@emotion/react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CardMedia from '@mui/material/CardMedia';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ProductDetails from './ProductDetails';
import { Close } from '@mui/icons-material';
import { useGetproductByNameQuery } from '../../Redux/product';

export default function Main() {
    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newValue) => {
      setAlignment(newValue);
      setmyDate(newValue)
    };
   const theme = useTheme()
   const [open, setOpen] = React.useState(false);

   const handleClickOpen = () => {
     setOpen(true);
   };

   const handleClose = () => {
     setOpen(false);
   };
   const allProductsAPI = '?populate=*';
   const menCategoryAPI = '?populate=*&filters[Category][$eq]=men';
   
   const womenCategoryAPI = '?populate=*&filters[Category][$eq]=women';

   const [myDate , setmyDate] = useState(allProductsAPI);
   const { data, error, isLoading } = useGetproductByNameQuery(myDate)
   if (data){
    console.log(data.data)
   }
  if(isLoading){
    return(
      <Typography variant='h6'>LOADING..........</Typography>
    )
  }
  if(error){
    return(
    <Typography variant='h6'>{""}{error.message}</Typography>)
  }
 if(data){ return (
  <Container sx={{ mt: 4, mb: 6 }}>
  {/* Header and Filters */}
  <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={3}
        >
    <Box>
      <Typography variant="h6">Selected Products</Typography>
      <Typography fontWeight={300} variant="body1">
        All our new arrivals in an exclusive brand selection
      </Typography>
    </Box>

    <Box>
    <ToggleButtonGroup
            color="error"
            value={myDate}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected": {
                border: "1px solid rgba(233, 69, 96, 0.5) !important",
                color: "#e94560",
                backgroundColor: "initial",
              },
            }}
          >
        <ToggleButton
          sx={{ color: theme.palette.text.primary }}
          className="myButton"
          value={allProductsAPI}
          aria-label="All Products"
        >
          All Products
        </ToggleButton>
        <ToggleButton
          sx={{ mx: "16px !important", color: theme.palette.text.primary }}
          className="myButton"
          value={womenCategoryAPI}
          aria-label="Women Category"
        >
          Women Category
        </ToggleButton>
        <ToggleButton
          sx={{ color: theme.palette.text.primary }}
          className="myButton"
          value={menCategoryAPI}
          aria-label="Men Category"
        >
          Men Category
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  </Stack>

  {/* Products Grid */}
  <Stack direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
   // Add some padding for better spacing
>
  {data.data.map((item) => (
     <Card
     key={item.id}
     sx={{
      maxWidth: 333,
                    mt: 6,height : "100%",
                    ":hover .MuiCardMedia-root ": {
                      rotate: "1deg",
                      scale: "1.1",
                      transition: "0.35s",
       },
      
     }}
   >
        <CardMedia
          component="img"
          sx={{
            height: 277,
            width: "100%",
            objectFit: "cover",
            transition: "0.2s",
          }}
          image={`${item.productimg?.[0]?.url }`}
          title="product image"
        />

        <CardContent>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h6" component="div">
              {item.productTitle}
            </Typography>
            <Typography variant="subtitle1" component="p">
              ${item.Productprice}
            </Typography>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            {item.productdesc}
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            onClick={handleClickOpen}
            sx={{ textTransform: "capitalize" }}
            size="small"
          >
            <AddShoppingCartIcon sx={{ mr: 2 }} />
            Add to cart
          </Button>
        </CardActions>
      </Card>
    ))}
  </Stack>

  {/* Product Dialog */}
  <Dialog
    sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 400 } } }}
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <IconButton
      sx={{
        ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
        position: "absolute",
        top: 0,
        right: 10,
      }}
      onClick={handleClose}
    >
      <Close />
    </IconButton>
    <ProductDetails />
  </Dialog>
</Container>
);}
}
