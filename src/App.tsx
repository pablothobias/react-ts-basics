import './App.css'

import CourseGoal from './components/CourseGoal/CourseGoal';
import Header from './components/Header/Header';
import { TitleHeaderCss } from './components/Header/Header.style';

import goalsImg from './assets/goalsImg.png';

function App() {
  return (
    <>
      <Header img={{src: goalsImg, alt: 'A list of goals'}}>
        <TitleHeaderCss>Your Course Goal</TitleHeaderCss>
      </Header>
      <CourseGoal title='hey' description='how' />
    </>
  )
}

export default App
