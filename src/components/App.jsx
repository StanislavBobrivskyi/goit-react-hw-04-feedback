// import React, { Component } from 'react';
// import { Feedbacks } from './Feedback/Feedbacks';
// import { NotificationMessage } from './Notification/Notification';
// import { Section } from './Section/Section';
// import { Statistics } from './Statistics/Statistics';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleFeedbackClick = type => {
//     this.setState(prevState => ({
//       ...prevState,
//       [type]: prevState[type] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const totalFeedback = this.countTotalFeedback();
//     const { good } = this.state;
//     return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const totalFeedback = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();
//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <Feedbacks
//             options={['good', 'neutral', 'bad']}
//             onLeaveFeedback={this.handleFeedbackClick}
//           />
//         </Section>

//         <Section title="Statistics">
//           {totalFeedback === 0 ? (
//             <NotificationMessage />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={totalFeedback}
//               positivePercentage={positivePercentage}
//             />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

import React, { useState } from 'react';
import { Feedbacks } from './Feedback/Feedbacks';
import { NotificationMessage } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [feedbackCounts, setFeedbackCounts] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedbackClick = type => {
    setFeedbackCounts(prevCounts => ({
      ...prevCounts,
      [type]: prevCounts[type] + 1,
    }));
  };

  const totalFeedback =
    feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad;
  const positivePercentage =
    totalFeedback === 0
      ? 0
      : Math.round((feedbackCounts.good / totalFeedback) * 100);

  return (
    <div>
      <Section title="Please leave feedback">
        <Feedbacks
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedbackClick}
        />
      </Section>

      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <NotificationMessage />
        ) : (
          <Statistics
            good={feedbackCounts.good}
            neutral={feedbackCounts.neutral}
            bad={feedbackCounts.bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
};
