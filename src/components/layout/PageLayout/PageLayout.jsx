import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import DarkMode from "../../ui/darkMode/DarkMode";
import ScrollButton from "../../ui/button/ScrollToTop";
import DetermineButton from "../../ui/button/DetermineButton";
import Dictaphone from "../../../features/voiceAssistance/VoiceAssistance";
import GlobalChatWidget from "../../../features/chat/GlobalChatWidget";
import ChatBot from "../../ui/button/ChatBot";

const PageLayout = () => {
  return (
    <div className="relative">
     <div> <Navbar /></div>
      <div><GlobalChatWidget/></div>
      <div><DarkMode /></div>
      <div><DetermineButton/></div>
      <div><ScrollButton/></div>
      <div><Dictaphone /></div>
      <div><ChatBot /></div>
        
      <main className="mt-28">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
