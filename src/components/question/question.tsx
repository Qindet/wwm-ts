import React from "react";
import classes from './question.module.css'
import {QuestionItem} from "../../types/state";
import AnswerContainer from "../../containers/answer-container";

type Question = {
    question: QuestionItem
    questionChecker: (number: number) => string
    setShow: () => void
    isWrong: boolean
    setIsWrong: (ans: boolean) => void
    hasHintHalf: boolean
    activateHint: () => void
}

const Question: React.FC<Question> = ({question,questionChecker,setShow,setIsWrong,isWrong,hasHintHalf,activateHint}) => {
    const content = Array(4).fill('')
        .map((_,i)=><AnswerContainer question={question} key={Date.now()*Math.random()}
                                     setShow={setShow} setIsWrong={setIsWrong}
                                     isWrong={isWrong}  questionChecker={questionChecker} number={i}
                                     answer={i===1?question.firstAnswer:i===2?question.secondAnswer:i===3?question.thirdAnswer:question.fourthAnswer}
        />)
    let filtered = content
    if (hasHintHalf) {
        filtered = content.filter((item,i) => i===+question.rightAnswer || i===+question.rightAnswer+1)
    }
    return (
        <div className={classes.QuestionMainContainer}>
            <button className="btn" onClick={activateHint}>Activate</button>
            <div className={classes.QuestionMainBlock}>
                {question.question}
            </div>
            <div className={classes.QuestionMain}>
                {filtered}


            {/*<AnswerContainer  question={question}*/}
            {/*    setShow={setShow}*/}
            {/*                 isWrong={isWrong} setIsWrong={setIsWrong}*/}
            {/*         questionChecker={questionChecker} number={1} answer={question.firstAnswer}/>*/}
            {/*<AnswerContainer  question={question}*/}
            {/*    setShow={setShow}*/}
            {/*                 isWrong={isWrong} setIsWrong={setIsWrong}*/}

            {/*                  questionChecker={questionChecker} number={2} answer={question.secondAnswer}/>*/}
            {/*<AnswerContainer  question={question}*/}
            {/*    setShow={setShow}*/}
            {/*                 isWrong={isWrong} setIsWrong={setIsWrong}*/}

            {/*                  questionChecker={questionChecker} number={3} answer={question.thirdAnswer}/>*/}
            {/*<AnswerContainer  question={question}*/}
            {/*    setShow={setShow}*/}
            {/*                 isWrong={isWrong} setIsWrong={setIsWrong}*/}

            {/*                 questionChecker={questionChecker} number={4} answer={question.fourthAnswer}/>*/}
        </div>
    </div>
    )
}

export default Question
