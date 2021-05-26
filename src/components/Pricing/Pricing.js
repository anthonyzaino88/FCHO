import React from 'react';
import { Button } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardFeatures,
  PricingCardFeature,
  Img
} from './Pricing.elements';

const Pricing = ({
  img1,
  img2,
  img3,
  alt,
  start
}) => {
  return (
    <>
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Team</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <Img src={img1} alt={alt} />
                </PricingCardIcon>
                <PricingCardPlan>Mike Pradella</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>President</PricingCardFeature>
                  <PricingCardFeature>Founder of Citrus Kings Hockey</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Contact</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                <Img src={img2} alt={alt} />
                </PricingCardIcon>
                <PricingCardPlan>Anthony Zaino</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>Secretary</PricingCardFeature>
                  <PricingCardFeature>Co-Director Citrus Kings Hockey</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Contact</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                <Img src={img3} alt={alt} />
                </PricingCardIcon>
                <PricingCardPlan>JP </PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>Treasurer</PricingCardFeature>
                  <PricingCardFeature>Ck Club Team</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Contact</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  </>
  );
}
export default Pricing;
