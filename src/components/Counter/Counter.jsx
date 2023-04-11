import css from './Counter.module.css';

const Counter = ({addFeedback}) => {
  return (
    <div className={css.Counter}>
      <div className={css.Counter__controls}>
        <button type="button" name='good' onClick={addFeedback}>
          Good
        </button>
        <button type="button" name='neutral' onClick={addFeedback}>
          Neutral
        </button>
        <button type="button" name='bad' onClick={addFeedback}>
          Bad
        </button>
      </div>
    </div>
  );
};

export default Counter;
