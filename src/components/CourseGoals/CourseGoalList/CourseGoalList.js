import './CourseGoalList.css';

import PropTypes from 'prop-types';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';

const CourseGoalList = ({ items, onDeleteItem }) => {
  const deleteItemHandler = (event) => {
    if (onDeleteItem) {
      onDeleteItem(event);
    }
  };

  return (
    <ul className="goal-list">
      {items.map((goal) => (
        <CourseGoalItem key={goal.id} id={goal.id} onDelete={deleteItemHandler}>
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

CourseGoalList.propTypes = {
  items: PropTypes.arrayOf(Object).isRequired,
  onDeleteItem: PropTypes.func,
};

CourseGoalList.defaultProps = {
  onDeleteItem: null,
};

export default CourseGoalList;
