import React from 'react';
import Pricing from '../../components/pricing/Pricing';
import InfoSection from '../../components/infoSection/InfoSection';

import { homeObjOne, homeObjThree } from './Data';

function Services() {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default Services;