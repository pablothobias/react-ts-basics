import { useState } from 'react';

import CourseGoalList from './components/CourseGoalList/CourseGoalList';
import Header from './components/Header/Header';
import NewGoal from './components/NewGoal/NewGoal';

import { TitleHeaderCss } from './components/Header/Header.style';
import { AppContainer } from './App.style';
import './App.css';

import goalsImg from './assets/goalsImg.png';

export type CourseGoal = {
  title: string;
  description: string;
  id?: number;
};

function App() {
  const [courseGoals, setCourseGoals] = useState<Array<CourseGoal>>([]);

  const handleAddGoal = ({ goal }: { goal: CourseGoal }) => {
    setCourseGoals((prevCourseGoals) => {
      const lastId = prevCourseGoals[prevCourseGoals.length - 1]?.id;
      const currentId = lastId ? lastId + 1 : 1;
      return [...prevCourseGoals, { id: currentId, title: goal?.title, description: goal?.description }];
    });
  };

  const handleDeleteGoal = (id?: number) => {
    if (!id) return;

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
        <NewGoal handleAddGoal={handleAddGoal} />
        <CourseGoalList courseGoals={courseGoals} handleDeleteGoal={handleDeleteGoal} />
      </AppContainer>
    </>
  )
}

export default App
