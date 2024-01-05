import { useState } from 'react';
import styled from 'styled-components';

import './App.css'

import CourseGoal from './components/CourseGoal/CourseGoal';
import Header from './components/Header/Header';
import { TitleHeaderCss } from './components/Header/Header.style';

import goalsImg from './assets/goalsImg.png';

const AppContainer = styled.div`
  overflow: auto;
  max-height: 90vh;
  width: 100%;
`;

type CourseGoal = {
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
        <button onClick={handleAddGoal}>Add Goal</button>
        <ul>
          {
            courseGoals
              .map((goal: CourseGoal) => (
                <li key={goal.id}>
                  <CourseGoal
                    id={goal.id}
                    title={goal.title}
                    description={goal.description}
                    handleDeleteGoal={handleDeleteGoal}
                  />
                </li>
              ))
          }
        </ul>
      </AppContainer>
    </>
  )
}

export default App
