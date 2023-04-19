import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onFeedback }) => {
  return (
    <div className={css.Counter}>
      {options.map(option => (
        <button
          className={css.button}
          type="button"
          key={option}
          onClick={() => onFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
// const FeedbackOptions = ({onFeedback}) => {
//   return (
//     // <div className={css.Counter}>
//       <div className={css.Counter__controls}>
//         <button type="button" name='good' onClick={onFeedback}>
//           Good
//         </button>
//         <button type="button" name='neutral' onClick={onFeedback}>
//           Neutral
//         </button>
//         <button type="button" name='bad' onClick={onFeedback}>
//           Bad
//         </button>
//       </div>
//     // </div>
//   );
// };

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
