import React from 'react'
import SocialMedia from "../socialMediaIcon/SocialMedia";
import { FaYoutube ,FaWhatsapp,FaInstagram,FaTwitter ,FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren:0.5,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1 },
};

const SocialList = () => {
  return (
    <motion.div
      className="flex gap-2.5"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item}><SocialMedia Icon={FaYoutube} /></motion.div>
      <motion.div variants={item}><SocialMedia Icon={FaFacebookF} /></motion.div>
      <motion.div variants={item}><SocialMedia Icon={FaWhatsapp} /></motion.div>
      <motion.div variants={item}><SocialMedia Icon={FaInstagram} /></motion.div>
      <motion.div variants={item}><SocialMedia Icon={FaTwitter} /></motion.div>
    </motion.div>
  );
};

export default SocialList;
