import { type FC } from 'react';

import { GoalsListCss } from './CourseGoalList.style.ts';
import CourseGoal from '../../components/CourseGoal/CourseGoal.tsx';
import { type CourseGoal as CourseGoalType } from '../../App.tsx';

type CourseGoalListProps = {
    courseGoals: Array<CourseGoalType>;
    handleDeleteGoal: (id: number) => void;
};

const CourseGoalList: FC<CourseGoalListProps> = ({ courseGoals, handleDeleteGoal }) => {

    return (
        <GoalsListCss>
            {
                courseGoals
                    .map((goal) => (
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
        </GoalsListCss>
    );
};

export default CourseGoalList;