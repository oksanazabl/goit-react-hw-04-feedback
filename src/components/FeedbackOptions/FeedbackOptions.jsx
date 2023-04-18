import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({onFeedback}) => {
  return (
    // <div className={css.Counter}>
      <div className={css.Counter__controls}>
        <button type="button" name='good' onClick={onFeedback}>
          Good
        </button>
        <button type="button" name='neutral' onClick={onFeedback}>
          Neutral
        </button>
        <button type="button" name='bad' onClick={onFeedback}>
          Bad
        </button>
      </div>
    // </div>
  );
};

FeedbackOptions.propTypes = {
  onFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
