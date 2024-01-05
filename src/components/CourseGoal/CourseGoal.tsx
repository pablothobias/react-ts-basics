import { CourseGoalContainerCss } from './CourseGoal.style.ts';

interface CourseGoalProps {
    title: string;
    description: string;
}

const CourseGoal: React.FC<CourseGoalProps> = (props) => {
    return (
        <CourseGoalContainerCss>
            <div>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            <button>DELETE</button>
        </CourseGoalContainerCss>
    );
};

export default CourseGoal;