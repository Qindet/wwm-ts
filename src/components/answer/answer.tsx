import React from "react";
import classes from "./answer.module.css";

type Answer = {
    clazz: string
    onClicked: () => void
    answer: string
    number: number
}

const Answer: React.FC<Answer> = ({clazz,onClicked,answer,number}) => (
    <div>
        <div onClick={onClicked} className={`${classes.QuestionItem} ${clazz}`}><span className={classes.Number}>{number}:</span> {answer}</div>
    </div>
)

export default Answer
