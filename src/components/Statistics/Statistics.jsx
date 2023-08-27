import { StatisticsDescr } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <StatisticsDescr>Good: {good}</StatisticsDescr>
      <StatisticsDescr>Neutral: {neutral}</StatisticsDescr>
      <StatisticsDescr>Bad: {bad}</StatisticsDescr>
      <StatisticsDescr>Total: {total}</StatisticsDescr>
      <StatisticsDescr>
        Positive Percentage: {positivePercentage}%
      </StatisticsDescr>
    </div>
  );
};
