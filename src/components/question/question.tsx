import React from "react";
import classes from './question.module.css'
import {QuestionItem} from "../../types/state";
import AnswerContainer from "../../containers/answer-container";

type Question = {
    question: QuestionItem
    correctAnswer: (questionNumber: string) => void
    questionChecker: (number: number) => string
    setShow: () => void
    isWrong: boolean
    setIsWrong: (ans: boolean) => void
    wrongAnswer: () => void
    addQuestionId: (questionId: { id:number }) => void
}

const Question: React.FC<Question> = ({addQuestionId,question,correctAnswer,questionChecker,setShow,setIsWrong,isWrong,wrongAnswer}) => (
    <div className={classes.QuestionMainContainer}>
        <div className={classes.QuestionMainBlock}>
            {question.question}
        </div>
        <div className={classes.QuestionMain}>
            <AnswerContainer addQuestionId={addQuestionId} question={question}
                numberOfCorrect={question.rightAnswer}  setShow={setShow}
                             wrongAnswer={wrongAnswer}
                     correctAnswer={() => correctAnswer(question.questionNumber)}
                             isWrong={isWrong} setIsWrong={setIsWrong}
                     questionChecker={questionChecker} number={1} answer={question.firstAnswer}/>
            <AnswerContainer addQuestionId={addQuestionId} question={question}
                setShow={setShow}  numberOfCorrect={question.rightAnswer}
                             isWrong={isWrong} setIsWrong={setIsWrong}
                             wrongAnswer={wrongAnswer}
                             correctAnswer={() => correctAnswer(question.questionNumber)} questionChecker={questionChecker} number={2} answer={question.secondAnswer}/>
            <AnswerContainer addQuestionId={addQuestionId} question={question}
                setShow={setShow}  numberOfCorrect={question.rightAnswer}
                             isWrong={isWrong} setIsWrong={setIsWrong}
                             wrongAnswer={wrongAnswer}
                             correctAnswer={() => correctAnswer(question.questionNumber)} questionChecker={questionChecker} number={3} answer={question.thirdAnswer}/>
            <AnswerContainer addQuestionId={addQuestionId} question={question}
                setShow={setShow}  numberOfCorrect={question.rightAnswer}
                             isWrong={isWrong} setIsWrong={setIsWrong}
                             wrongAnswer={wrongAnswer}
                             correctAnswer={() => correctAnswer(question.questionNumber)} questionChecker={questionChecker} number={4} answer={question.fourthAnswer}/>
        </div>
    </div>
)

export default Question
