import React from "react";
import classes from "./answer.module.css";

type Answer = {
    clazz: string
    onClicked: () => void
    answer: string
}

const Answer: React.FC<Answer> = ({clazz,onClicked,answer}) => (
    <div>
        <div onClick={onClicked} className={`${classes.QuestionItem} ${clazz}`}>{answer}</div>
    </div>
)

export default Answer
