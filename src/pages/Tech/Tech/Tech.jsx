import React, { useEffect } from 'react';
import Issuers from '../Issuers/Issuers';
import LiveCycle from '../LiveCycle/LiveCycle';
import TestimonialSection from '../TestimonialSection/TestimonialSection';
import { changeTitleAndFavicon } from '../../../ChangeTitle/ChangeTitle';
import TachNav from '../../Shared/TachNav/TachNav';
import Footer from '../../Shared/Footer/Footer';

const Tech = () => {
    useEffect(() => {
      
      changeTitleAndFavicon('service');
    }, []);
  return (
    <div>
      <TachNav></TachNav>
        <Issuers></Issuers>
        <LiveCycle></LiveCycle>
        <TestimonialSection></TestimonialSection>
        <Footer/>
    </div>
  );
};

export default Tech;