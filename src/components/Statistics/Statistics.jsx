import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, pasitiveParsentage }) => {
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
      Pasitive feedback: {pasitiveParsentage}%
      </li>
    </ul>
  );
};


export default Statistics;
