import { PropTypes } from 'prop-types';

import styles from './CourseGoalItem.module.css';

const CourseGoalItem = ({ id, onDelete, children }) => {
  const deleteHandler = () => {
    if (onDelete) {
      onDelete(id);
    }
  };

  return (
    <li className={styles['goal-item']} onClick={deleteHandler} aria-hidden="true">
      {children}
    </li>
  );
};

CourseGoalItem.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  children: PropTypes.node,
};

CourseGoalItem.defaultProps = {
  onDelete: null,
  children: null,
};

export default CourseGoalItem;
