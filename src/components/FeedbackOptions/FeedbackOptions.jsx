import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onFeedback }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleButtonClick = (option) => {
    setSelectedOption(option);
    onFeedback(option);
  };

  return (
    <div className={css.Counter}>
      {options.map(option => (
        <button
          className={`${css.button} ${selectedOption === option ? css.activeButton : ''}`}
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