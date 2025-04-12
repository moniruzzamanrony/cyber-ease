import React, { useEffect } from 'react';
import AboutNav from '../../../Shared/AboutNav/AboutNav';
import InFo from './InFo/InFo';
import OurTeam from './OurTeam/OurTeam';
import Opsition from './Opsition/Opsition';
import Financial from './Financial/Financial';
import ESGSection from './ESGSection/ESGSection';
import PostEmail from '../../PostEmail/PostEmail';
import { changeTitleAndFavicon } from '../../../../ChangeTitle/ChangeTitle';
import AboutNavber from '../../../Shared/AboutNavber/AboutNavber';
import Footer from '../../../Shared/Footer/Footer';
import { useLocation } from 'react-router-dom';

const About = () => {
    useEffect(() => {
      
      changeTitleAndFavicon('about');
    }, []);
    const location = useLocation();

    console.log("object",location);

    useEffect(() => {
      const scrollToHash = () => {
        if (location.hash) {
          const target = document.querySelector(location.hash);
          if (target) {
            setTimeout(() => {
              target.scrollIntoView();
            }, ); 
          }
        }
      };
  
      scrollToHash();
  
      
      const unlisten = () => {
        window.addEventListener("hashchange", scrollToHash);
      };
  
      unlisten();
      return () => window.removeEventListener("hashchange", scrollToHash);
    }, [location]);
  return (
    <div>
        {/* <AboutNav></AboutNav> */}
        <AboutNavber></AboutNavber>
        <InFo></InFo>
        {/* <OurTeam></OurTeam> */}
        {/* <Opsition></Opsition> */}
        {/* <Financial></Financial> */}
        <ESGSection></ESGSection>
        <PostEmail id="contact-section" ></PostEmail>
        <Footer/>
    </div>
  );
};

export default About;