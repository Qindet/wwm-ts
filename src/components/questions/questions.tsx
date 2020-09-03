import React, {Dispatch, useEffect, useRef, useState} from "react";
import classes from './questions.module.css'
import {connect} from 'react-redux'
import {getQuestionSelector} from "../../selectors/game-selectors";
import {AppStateType} from "../../redux/reducers";
import {QuestionItem} from "../../types/state";
import {number} from "yup";
import {correctAnswer} from "../../redux/actions/game-actions";
import Answer from "../UI/answer";

//
type MapStatePropsType = {
    question?: QuestionItem | null
}
type MapDispatchPropsType = {
    correctAnswer: (questionNumber: string) => void
}
type OwnProps = {}
//
type Question = MapStatePropsType & MapDispatchPropsType & OwnProps

const Question: React.FC<Question> = ({question,correctAnswer}) => {
    useEffect(() => {
        const timerId=setTimeout(() => {
            setShow(true)
        },2000)
        return () => clearTimeout(timerId)
    },[question])
    const [show,setShow] = useState(false)
    if (!question) {
        return <div>empty</div>
    }
    if (!show) {
        return <div>{question.questionNumber}</div>
    }


    const questionChecker = (number: number) => {
        if (number === +question.rightAnswer) {
            return 'correct'
        } else {
            return 'wrong'
        }
    }
    return (
        <div>
            <div className={classes.QuestionMainBlock}>
                {question.question}
            </div>
            <div className={classes.QuestionMain}>
                <Answer  setShow={setShow}
                    correctAnswer={() => correctAnswer(question.questionNumber)}
                    questionChecker={questionChecker} number={1} answer={question.firstAnswer}/>
                <Answer setShow={setShow}
                    correctAnswer={() => correctAnswer(question.questionNumber)} questionChecker={questionChecker} number={2} answer={question.secondAnswer}/>
                <Answer setShow={setShow}
                    correctAnswer={() => correctAnswer(question.questionNumber)} questionChecker={questionChecker} number={3} answer={question.thirdAnswer}/>
                <Answer setShow={setShow}
                    correctAnswer={() => correctAnswer(question.questionNumber)} questionChecker={questionChecker} number={4} answer={question.fourthAnswer}/>
                {/*<div onClick={() => questionChecker(1)} className={classes.QuestionItem}>{question.firstAnswer}</div>*/}
                {/*<div onClick={() => questionChecker(2)} className={classes.QuestionItem}>{question.secondAnswer}</div>*/}
                {/*<div onClick={() => questionChecker(3)} className={classes.QuestionItem}>{question.thirdAnswer}</div>*/}
                {/*<div onClick={() => questionChecker(4)} className={classes.QuestionItem}>{question.fourthAnswer}</div>*/}
            </div>
        </div>

    )
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        question: getQuestionSelector(state) || null
    }
}
const mapDispatchToProps = (dispatch: Dispatch<any>): MapDispatchPropsType => {
    return {
        correctAnswer: (questionNumber) => dispatch(correctAnswer(questionNumber))
    }
}

export default connect<MapStatePropsType,MapDispatchPropsType,OwnProps,AppStateType>(mapStateToProps, mapDispatchToProps)(Question)