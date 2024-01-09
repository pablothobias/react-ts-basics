import { ReactNode, type FC } from 'react';

import CourseGoal from '../../components/CourseGoal/CourseGoal.tsx';
import InfoBox from '../InfoBox/InfoBox.tsx';

import { type CourseGoal as CourseGoalType } from '../../App.tsx';

import { GoalsListCss } from './CourseGoalList.style.ts';

type CourseGoalListProps = {
    courseGoals: Array<CourseGoalType>;
    handleDeleteGoal: (id?: number) => void;
};

const CourseGoalList: FC<CourseGoalListProps> = ({ courseGoals, handleDeleteGoal }) => {

    let warningBox: ReactNode = null;

    if (courseGoals.length === 0) {
        warningBox = (
            <InfoBox mode='hint'>
                <p>No goals found. Maybe add one?</p>
            </InfoBox>
        );
    }

    if (courseGoals.length > 4) {
        warningBox = (
            <InfoBox mode='warning'>
                <p>You're collecting a lot of goals. Don't put too many on your plate! </p>
            </InfoBox>
        );
    }

    return (
        <>
            {warningBox}
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
        </>
    );
};

export default CourseGoalList;