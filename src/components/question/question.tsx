import React from "react";
import classes from './question.module.css'
import Answer from "../answer/answer";
import {QuestionItem} from "../../types/state";
import AnswerContainer from "../../containers/answer-container";

type Question = {
    question: QuestionItem
    correctAnswer: (questionNumber: string) => void
    questionChecker: (number: number) => string
    setShow: () => void
}

const Question: React.FC<Question> = ({question,correctAnswer,questionChecker,setShow}) => (
    <div className={classes.QuestionMainContainer}>
        <div className={classes.QuestionMainBlock}>
            {question.question}
        </div>
        <div className={classes.QuestionMain}>
            <AnswerContainer numberOfCorrect={question.rightAnswer}  setShow={setShow}
                     correctAnswer={() => correctAnswer(question.questionNumber)}
                     questionChecker={questionChecker} number={1} answer={question.firstAnswer}/>
            <AnswerContainer setShow={setShow}  numberOfCorrect={question.rightAnswer}
                             correctAnswer={() => correctAnswer(question.questionNumber)} questionChecker={questionChecker} number={2} answer={question.secondAnswer}/>
            <AnswerContainer setShow={setShow}  numberOfCorrect={question.rightAnswer}
                             correctAnswer={() => correctAnswer(question.questionNumber)} questionChecker={questionChecker} number={3} answer={question.thirdAnswer}/>
            <AnswerContainer setShow={setShow}  numberOfCorrect={question.rightAnswer}
                             correctAnswer={() => correctAnswer(question.questionNumber)} questionChecker={questionChecker} number={4} answer={question.fourthAnswer}/>
        </div>
    </div>
)

export default Question
