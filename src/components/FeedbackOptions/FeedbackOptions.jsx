import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onFeedback }) => {
  const handleButtonClick = (option) => {
    onFeedback(option);
  };

  return (
    <div className={css.Counter}>
      {options.map(option => (
        <button
          className={css.button}
          type="button"
          key={option}
          onClick={() => handleButtonClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;