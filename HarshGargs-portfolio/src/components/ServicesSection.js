import React from 'react';
import { MdDesktopMac, MdCode } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading=" What i do " heading="My Interest" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Web Development"
            desc="I develop responsive,high performance Full Stack website using mern stack technology  ."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Competitive Programming"
            desc="I focus on Data Structures and Algorithms and solve CP problems using optimized Algo's ."
          />
          {/* <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="app Dev"
            desc="I develop mobile application. I create mobile app with eye catching ui. "
          /> */}
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
