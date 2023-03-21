import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";

export default function Default() {
  return (
    <>
    <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "20px",
          mb: "15px",
        }}
      >
        <Typography
          as="h3"
          sx={{
            fontSize: 18,
            fontWeight: 500,
            mb: '10px'
          }}
        >
          Default
        </Typography>

        <Swiper className="mySwiper">
          <SwiperSlide>
            <img src="/images/slider-img1.jpg" alt="Image" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/images/slider-img2.jpg" alt="Image" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/images/slider-img3.jpg" alt="Image" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/images/slider-img4.jpg" alt="Image" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/images/slider-img5.jpg" alt="Image" />
          </SwiperSlide>
        </Swiper>
      </Card>
    </>
  );
}
