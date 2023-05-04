import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total }) => {
  const calculatePositiveFeedbackPercentage = () => {
    if (total === 0) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };

  const positiveFeedbackPercentage = calculatePositiveFeedbackPercentage();

  return (
    <ul className={css.Statistics}>
      <li className={css.Statistics__poit}>
        Good: {good}
      </li>
      
      <li className={css.Statistics__poit}>
      Neutral: {neutral}
      </li>
      <li className={css.Statistics__poit}>
        Bad: {bad}
      </li>
      <li className={css.Statistics__poit}>
        Total: {total}
      </li>
      <li className={css.Statistics__poit}>
      Pasitive feedback: {positiveFeedbackPercentage}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Statistics;