import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad }) => {
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
    </ul>
  );
};


export default Statistics;
