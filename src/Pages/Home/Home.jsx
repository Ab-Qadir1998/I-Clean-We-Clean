import React from 'react'
import Banner from '../../components/Banner/Banner'
import TheTitles from '../../components/TheTitles/TheTitles'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container';
import './Home.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { services } from '../../data/services'
const Home = () => {
  console.log(services)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nav : true
  }
  return (
    <>
      <Banner />
      <section className='services-section'>
      <Container maxWidth="lg">
        <Grid container spacing={10} alignItems="center" justifyContent="space-between">
          <Grid item md={8}>
            <TheTitles preHeading="Our Services" sectionHeading="Choose Our Services??" sectionIntro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
          </Grid>
          <Grid item md={4} >
            <Button className="button--main">View All</Button>
          </Grid>
        </Grid>
        
          <div className='services-wrapper'>
            <Slider {...settings}>
              {services.map(service => (
                <div className='services-box' key={service.id}>
                  <div className='service__image'>
                    <img src={service.img} />
                  </div>
                  <div className='service__text-wrapp'>
                    <h3 className='service__title'>{service.name}</h3>
                    <p className='service__intro'>{service.intro}</p>
                    <Button className="button--main">Book Now</Button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
      </Container>
        </section >
    </>
  )
}

export default Home