import { CourseGoalContainerCss } from './CourseGoal.style.ts';

interface CourseGoalProps {
    title: string;
    description: string;
    id: number;
    handleDeleteGoal: (id: number) => void;
}

const CourseGoal: React.FC<CourseGoalProps> = (props) => {
    return (
        <CourseGoalContainerCss>
            <div>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            <button onClick={() => props.handleDeleteGoal(props.id)}>DELETE</button>
        </CourseGoalContainerCss>
    );
};

export default CourseGoal;