import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({ type, onClick, children }) => {
  const clickHandler = (event) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button type={type === 'submit' ? 'submit' : 'button'} className={styles.button} onClick={clickHandler}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

Button.defaultProps = {
  onClick: null,
  children: null,
};

export default Button;
