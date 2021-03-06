import React from "react";
import classes from './question.module.css'
import {QuestionItem} from "../../types/state";
import AnswerContainer from "../../containers/answer-container";
import heart from '../../assets/heart.svg'

type Question = {
    question: QuestionItem
    questionChecker: (number: number) => string
    setShow: () => void
    isWrong: boolean
    setIsWrong: (ans: boolean) => void
    hearts: number
}

const Question: React.FC<Question> = ({question,questionChecker,setShow,setIsWrong,isWrong,hearts}) => {

    return (
        <div className={classes.QuestionMainContainer}>
            {hearts===0?<div className={classes.NoHearts}>No hearts :(</div>:Array(hearts).fill('').map(_=><img alt="img" className={classes.Heart} src={heart} />)}
            <div className={classes.QuestionMainBlock}>
                {question.question}
            </div>
            <div className={classes.QuestionMain}>
                {Array(4).fill('')
                    .map((_,i)=><AnswerContainer question={question} key={Date.now()*Math.random()}
                                                 setShow={setShow} setIsWrong={setIsWrong}
                                                 isWrong={isWrong}  questionChecker={questionChecker} number={i}
                                                 answer={i===1?question.firstAnswer:i===2?question.secondAnswer:i===3?question.thirdAnswer:question.fourthAnswer}
                    />)}
        </div>
    </div>
    )
}

export default Question
