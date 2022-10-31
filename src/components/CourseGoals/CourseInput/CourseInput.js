import PropTypes from 'prop-types';
import { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

const CourseInput = ({ onAddGoal }) => {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (inputValue.trim()) {
      setIsValid(true);
    }

    setInputValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!inputValue.trim()) {
      setIsValid(false);
      return;
    }

    if (onAddGoal) {
      onAddGoal(inputValue);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label htmlFor="goalInput">
          Course Goal
          <input id="goalInput" type="text" value={inputValue} onChange={goalInputChangeHandler} />
        </label>
      </div>

      <Button type="submit">Add Goal</Button>
    </form>
  );
};

CourseInput.propTypes = {
  onAddGoal: PropTypes.func,
};

CourseInput.defaultProps = {
  onAddGoal: null,
};

export default CourseInput;
