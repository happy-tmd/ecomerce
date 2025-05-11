import { Box, Button, Container, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.css';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import IconSection from './IconSection';
const mySlider = [
  {text:"WOMEN" ,link : "Images/banner-25.jpg"},
  {text:"MEN" ,link : "Images/banner-15.jpg"}
]
export default function Hero() {
  const theme = useTheme();
  return (
    <Container>
      <Box  sx={{ pt : 2 ,gap: 2, mt: 10, display: "flex", alignItems: "center" }}>
    <Swiper
    loop={true}

      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {mySlider.map((item, index) => {
        return (
          <SwiperSlide key={index} className="parent">
            <img src={item.link} alt={item.text} width="100%" />
            <Box
              sx={{
                [theme.breakpoints.up("sm")]: {
                  position: "absolute",
                  left: "10%",
                  top: "50%",
                  transform: "translateY(-50%)",
                  textAlign: "left",
                },
                [theme.breakpoints.down("sm")]: {
                  pt: 4,
                  pb: 6,
                },
              }}
            >
              <Typography sx={{ color: "#222" }} variant="h5">
                {item.text} COLLECTION
              </Typography>
              <Stack sx={{ justifyContent: "center" }} direction="row" alignItems="center">
                <Typography color={"#333"} mr={1} variant="h4">
                  SALE Up to
                </Typography>
                <Typography color={"#D23f57"}>
                  30% OFF
                </Typography>
              </Stack>
              <Typography
                sx={{
                  color: "#000",
                  fontWeight: "300px",
                  my: 1,
                }}
                variant="body1"
              >
                Get Free Shipping on orders over $99.00
              </Typography>
              <Button
                sx={{
                  px: 5,
                  py: 1,
                  mt: 2,
                  backgroundColor: "#222",
                  boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                  color: "#fff",
                  borderRadius: "1px",
                  "&:hover": {
                    bgcolor: "#151515",
                    boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                  },
                }}
                variant="contained"
              >
                shop now
              </Button>
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>

    <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.6%" } }}>
      <Box position={"relative"}>
        <img width={"100%"} src="Images/banner-17.jpg" alt="" />
        <Stack sx={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: 40 }}>
          <Typography variant="caption" sx={{ color: "#2B3445", fontSize: "18px" }}>
            NEW ARRIVALS
          </Typography>
          <Typography variant="h6" sx={{ color: "#2B3445", lineHeight: "16px", mt: 1 }}>
            SUMMER
          </Typography>
          <Typography variant="h6" sx={{ color: "#2B3445" }}>
            SALE 20% OFF
          </Typography>
        </Stack>
      </Box>
      <Box sx={{ position: "relative" }}>
        <img width={"100%"} src="Images/banner-16.jpg" alt="" />
        <Stack sx={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: 40 }}>
          <Typography variant="caption" sx={{ color: "#2B3445", fontSize: "18px" }}>
            Gaming 4k
          </Typography>
          <Typography variant="h6" sx={{ color: "#2B3445", lineHeight: "16px", mt: 1 }}>
            Desktops &
          </Typography>
          <Typography variant="h6" sx={{ color: "#2B3445" }}>
            LAPTOPS
          </Typography>
        </Stack>
      </Box>
    </Box>                  </Box><IconSection />
  </Container>
  )
}
