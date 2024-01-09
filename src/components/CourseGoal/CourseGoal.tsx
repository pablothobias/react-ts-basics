import { CourseGoalContainerCss } from './CourseGoal.style.ts';

interface CourseGoalProps {
    title: string;
    description: string;
    id?: number;
    handleDeleteGoal: (id?: number) => void;
}

const CourseGoal: React.FC<CourseGoalProps> = ({ title, description, id, handleDeleteGoal }) => {
    return (
        <CourseGoalContainerCss>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <button onClick={() => handleDeleteGoal(id)}>DELETE</button>
        </CourseGoalContainerCss>
    );
};

export default CourseGoal;