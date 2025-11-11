// src/pages/landing/LandingPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { variantPages } from "../../configs/frameMorion/PagesVariants";
import { scrollVariant } from "../../configs/frameMorion/Scroll";

import HeroSection from "../../components/section/landing/HeroSection/HeroSection";
import TopCategories from "../../components/section/landing/TopCategories/TopCategories";
import AboutSection from "../../components/section/landing/AboutSection/AboutSection";
import FeaturedCourses from "../../components/section/landing/FeaturedCourses/FeaturedCourses";
import JoinTheClub from "../../components/section/landing/JoinTheClub/JoinTheClub";
import MasterMentors from "../../components/section/landing/MasterMentors/MasterMentors";
import OurNumbers from "../../components/section/landing/OurNumbers/OurNumbers";
import FAQSection from "../../components/section/landing/FAQSection/FAQSection";
import GettingStartedSection from "../../components/section/landing/GettingStartedSection/GettingStartedSection";
import BlogSection from "../../components/section/landing/BlogSection/BlogSection";

const LandingPage = () => {
  return (
    <motion.div
      variants={variantPages}
      initial="hidden"
      animate="visible"
    >
      <HeroSection />

      <motion.div
        variants={scrollVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <TopCategories />
      </motion.div>

      <motion.div
        variants={scrollVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <AboutSection />
      </motion.div>

      <motion.div
        variants={scrollVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <FeaturedCourses />
      </motion.div>

      <motion.div
        variants={scrollVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <JoinTheClub />
      </motion.div>

      <motion.div
        variants={scrollVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <MasterMentors />
      </motion.div>

      <motion.div
        variants={scrollVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <OurNumbers />
      </motion.div>

      <motion.div
        variants={scrollVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <FAQSection />
      </motion.div>

      <motion.div
        variants={scrollVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <GettingStartedSection />
      </motion.div>

      <motion.div
        variants={scrollVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <BlogSection />
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;
