// import { FeedbacksBtn, Wrapper } from './Feedbacks.styled';
// export const Feedbacks = ({ options, onLeaveFeedback }) => {
//   return (
//     <Wrapper>
//       {options.map(option => (
//         <FeedbacksBtn key={option} onClick={() => onLeaveFeedback(option)}>
//           {option}
//         </FeedbacksBtn>
//       ))}
//     </Wrapper>
//   );
// };

import React from 'react';
import { FeedbacksBtn, Wrapper } from './Feedbacks.styled';

export const Feedbacks = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      {options.map(option => (
        <FeedbacksBtn key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </FeedbacksBtn>
      ))}
    </Wrapper>
  );
};
