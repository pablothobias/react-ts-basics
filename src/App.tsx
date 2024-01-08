import { useState } from 'react';
import { AppContainer, AddButtonCss } from './App.style';

import './App.css'

import CourseGoalList from './components/CourseGoalList/CourseGoalList';
import Header from './components/Header/Header';
import { TitleHeaderCss } from './components/Header/Header.style';

import goalsImg from './assets/goalsImg.png';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [courseGoals, setCourseGoals] = useState<Array<CourseGoal>>([]);

  const handleAddGoal = () => {
    setCourseGoals((prevCourseGoals) => {
      const lastId = prevCourseGoals[prevCourseGoals.length - 1]?.id;
      const currentId = lastId ? lastId + 1 : 1;
      return [...prevCourseGoals, { id: currentId, title: 'React Typescript', description: 'Finish the Course' }];
    });
  };

  const handleDeleteGoal = (id: number) => {
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <AppContainer>
        <Header img={{ src: goalsImg, alt: 'A list of goals' }}>
          <TitleHeaderCss>Your Course Goal</TitleHeaderCss>
        </Header>
        <AddButtonCss onClick={handleAddGoal}>Add Goal</AddButtonCss>
        <CourseGoalList courseGoals={courseGoals} handleDeleteGoal={handleDeleteGoal} />
      </AppContainer>
    </>
  )
}

export default App
