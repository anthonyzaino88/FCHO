import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFive } from './Data';
import { Pricing, InfoSection, RinkSection } from '../../components';

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <RinkSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Pricing     {...homeObjFive} />
    </>
  );
}

export default Home;
