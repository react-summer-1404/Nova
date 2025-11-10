
import React from 'react'
import JoinTheClub from '../../components/section/landing/JoinTheClub/JoinTheClub'
import MasterMentors from '../../components/section/landing/MasterMentors/MasterMentors'
import OurNumbers from '../../components/section/landing/OurNumbers/OurNumbers'
import FAQSection from '../../components/section/landing/FAQSection/FAQSection'
import GettingStartedSection from '../../components/section/landing/GettingStartedSection/GettingStartedSection'
import BlogSection from '../../components/section/landing/BlogSection/BlogSection'
import HeroSection from '../../components/section/landing/HeroSection/HeroSection'
import TopCategories from '../../components/section/landing/TopCategories/TopCategories'
import AboutSection from '../../components/section/landing/AboutSection/AboutSection'
import FeaturedCourses from '../../components/section/landing/FeaturedCourses/FeaturedCourses'
import { useLocation } from 'react-router-dom'




const LandingPage = () => {
  
  const location = useLocation();
 

  return (
    <>
      <HeroSection/>
      <TopCategories/>
      <AboutSection/>
      <FeaturedCourses/>
      <JoinTheClub/>
      <MasterMentors/>
      <OurNumbers/>
      <FAQSection/>
      <GettingStartedSection/>
      <BlogSection/>
    </>
  )
}

export default LandingPage;
