import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import css from './Notification.module.css';

const Notification = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVisible && <p className={css.msg}>{message}</p>}
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;