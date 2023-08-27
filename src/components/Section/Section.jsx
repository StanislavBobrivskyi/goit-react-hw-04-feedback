// import { SectionContainer, Title } from './Section.styled';

// export const Section = ({ title, children }) => {
//   return (
//     <SectionContainer>
//       <Title>{title}</Title>
//       {children}
//     </SectionContainer>
//   );
// };

import React from 'react';
import { SectionContainer, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <Title>{title}</Title>
      {children}
    </SectionContainer>
  );
};
