import { type FC, type FormEvent, useRef } from "react";

import type { CourseGoal } from "../../App";
import { AddButtonCss, InputContainerCss } from './NewGoal.style';

type NewGoalProps = {
    handleAddGoal: ({ goal }: { goal: CourseGoal }) => void;
};

const NewGoal: FC<NewGoalProps> = ({ handleAddGoal }) => {
    const goalInputRef = useRef<HTMLInputElement | null>(null);
    const summaryInputRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!goalInputRef.current?.value || !summaryInputRef.current?.value) {
            return;
        }

        const goal = {
            title: goalInputRef.current.value,
            description: summaryInputRef.current.value,
        };

        handleAddGoal({ goal });

        event.currentTarget.reset();
    };

    return (
        <AddButtonCss>
            <form onSubmit={handleSubmit}>
                <InputContainerCss>
                    <label htmlFor="goal">Your goal</label>
                    <input ref={goalInputRef} id="goal" type="text" />
                </InputContainerCss>
                <InputContainerCss>
                    <label htmlFor="summary">Short summary</label>
                    <input ref={summaryInputRef} id="summary" type="text" />
                </InputContainerCss>
                <InputContainerCss>
                    <button>Add Goal</button>
                </InputContainerCss>
            </form>
        </AddButtonCss>
    );
};

export default NewGoal;