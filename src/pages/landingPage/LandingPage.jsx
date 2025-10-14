
import React from 'react'
import JoinTheClub from '../../components/section/landing/JoinTheClub/JoinTheClub'
import MasterMentors from '../../components/section/landing/MasterMentors/MasterMentors'
import OurNumbers from '../../components/section/landing/OurNumbers/OurNumbers'
import Navbar from '../../components/layout/navbar/Navbar'
import HeroSection from '../../components/section/landing/HeroSection/HeroSection'
import AboutSection from '../../components/section/landing/AboutSection/AboutSection'
import FeaturedCourses from '../../components/section/landing/FeaturedCourses/FeaturedCourses'
import TopCategories from '../../components/section/landing/TopCategories/TopCategories'


const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <TopCategories/>
      <AboutSection/>
      <FeaturedCourses/>
      <JoinTheClub/>
      <MasterMentors/>
      <OurNumbers/>
    </div>
  )
}

export default LandingPage;
