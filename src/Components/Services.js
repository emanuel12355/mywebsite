import React, { useState } from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import mobileIcon from "../Components/Mobile_app_perspective_matte.png";
import developerIcon from "../Components/Group 1.png";
import softwareIcon from "../Components/Dashboard_perspective_matte.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Services = () => {
    const [activeSlide, setActiveSlide] = useState(null); // Track the active slide

    const handleSlideChange = (swiper) => {
        setActiveSlide(swiper.activeIndex); // Update the active slide index
    };

    return (
        <Box sx={{ backgroundColor: '#F9F9FF', marginBottom: '20px' , position: 'relative', zIndex: 2}}>
            {/* Heading */}
            <Box display="flex" flexDirection="column" alignItems="center">
                <Typography mt={4} fontSize="35px" fontWeight="bold">
                    Services we offer
                </Typography>
            </Box>

            {/* Cards Container */}
            <Box display="flex" justifyContent="center" gap={3} flexWrap="wrap" mt={3} sx={{ width: "100%" }}>
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={20}
                    slidesPerView={3}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation
                    centeredSlides={true}

                    onSlideChange={handleSlideChange} // Handle slide change
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 10 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 20 },
                        1440: { slidesPerView: 4, spaceBetween: 20 },
                        1600: { slidesPerView: 5 }

                    }}
                >

                    {/* 1st Card */}
                    <SwiperSlide>
                        <Card sx={{ width: "333px", height: "287px" }}>
                            <CardMedia sx={{ marginLeft: "20px", marginTop: "20px" }}>
                                <img
                                    style={{
                                        border: "2px solid grey",
                                        borderRadius: "50%",
                                        height: "50px",
                                        width: "50px",
                                        padding: "10px",
                                        transform: activeSlide === 0 ? 'scale(1.2)' : 'scale(1)', // Apply scale effect to image
                                        transition: 'transform 0.3s ease', // Smooth transition for scaling
                                    }}
                                    src={mobileIcon}
                                    alt="Mobile Development"
                                />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom fontWeight={600} variant="h5">
                                    Mobile App Development
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    A website is an extension of yourself and we can help you to express it properly.
                                    Your website is your number one marketing asset because we live in a digital age.
                                </Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide>

                    {/* 2nd Card */}
                    <SwiperSlide>
                        <Card sx={{ width: "333px", height: "287px" }}>
                            <CardMedia sx={{ marginLeft: "20px", marginTop: "20px" }}>
                                <img
                                    style={{
                                        border: "2px solid grey",
                                        borderRadius: "50%",
                                        height: "50px",
                                        width: "50px",
                                        padding: "10px",
                                        transform: activeSlide === 1 ? 'scale(1.2)' : 'scale(1)',
                                        transition: 'transform 0.3s ease',
                                    }}
                                    src={mobileIcon}
                                    alt="Mobile Development"
                                />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom fontWeight={600} variant="h5">
                                    Mobile App Development
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    A website is an extension of yourself and we can help you to express it properly.
                                    Your website is your number one marketing asset because we live in a digital age.
                                </Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide>

                    {/* 3rd Card */}
                    <SwiperSlide>
                        <Card sx={{ width: "333px", height: "287px" }}>
                            <CardMedia sx={{ marginLeft: "20px", marginTop: "20px" }}>
                                <img
                                    style={{
                                        border: "2px solid grey",
                                        borderRadius: "50%",
                                        height: "50px",
                                        width: "50px",
                                        padding: "10px",
                                        transform: activeSlide === 2 ? 'scale(1.2)' : 'scale(1)',
                                        transition: 'transform 0.3s ease',
                                    }}
                                    src={developerIcon}
                                    alt="Web Design & Development"
                                />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom fontWeight={600} variant="h5">
                                    Web Design & Development
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    A website is an extension of yourself and we can help you to express it properly.
                                    Your website is your number one marketing asset because we live in a digital age.
                                </Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide>

                    {/* 4th Card */}
                    <SwiperSlide>
                        <Card sx={{ width: "333px", height: "287px" }}>
                            <CardMedia sx={{ marginLeft: "20px", marginTop: "20px" }}>
                                <img
                                    style={{
                                        border: "2px solid grey",
                                        borderRadius: "50%",
                                        height: "50px",
                                        width: "50px",
                                        padding: "10px",
                                        transform: activeSlide === 3 ? 'scale(1.2)' : 'scale(1)',
                                        transition: 'transform 0.3s ease',
                                    }}
                                    src={softwareIcon}
                                    alt="Software Testing Service"
                                />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom fontWeight={600} variant="h5">
                                    Software Testing Service
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    A website is an extension of yourself and we can help you to express it properly.
                                    Your website is your number one marketing asset because we live in a digital age.
                                </Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide>

                    {/* 5th Card */}
                    <SwiperSlide>
                        <Card sx={{ width: "333px", height: "287px" }}>
                            <CardMedia sx={{ marginLeft: "20px", marginTop: "20px" }}>
                                <img
                                    style={{
                                        border: "2px solid grey",
                                        borderRadius: "50%",
                                        height: "50px",
                                        width: "50px",
                                        padding: "10px",
                                        transform: activeSlide === 4 ? 'scale(1.2)' : 'scale(1)',
                                        transition: 'transform 0.3s ease',
                                    }}
                                    src={developerIcon}
                                    alt="Software Testing Service"
                                />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom fontWeight={600} variant="h5">
                                    Software Testing Service
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    A website is an extension of yourself and we can help you to express it properly.
                                    Your website is your number one marketing asset because we live in a digital age.
                                </Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide>

                </Swiper>
            </Box>


        </Box>
    );
};

export default Services;