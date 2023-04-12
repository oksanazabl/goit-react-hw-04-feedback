import css from './Counter.module.css';

const Counter = ({onFeedback}) => {
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

export default Counter;
