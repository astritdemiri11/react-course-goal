import './App.css';

import { useState } from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' },
  ]);

  const addGoalHandler = (text) => {
    setCourseGoals((prevGoals) => [
      { text, id: Math.random().toString() }, ...prevGoals,
    ]);
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== goalId));
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>

      <section id="goals">
        {content}
      </section>
    </div>
  );
};

export default App;
