import React, {Dispatch, useEffect, useState} from "react";
import {connect} from 'react-redux'
import {getHearts, getQuestionSelector} from "../../selectors/game-selectors";
import {AppStateType} from "../../redux/reducers";
import {QuestionItem} from "../../types/state";
import {questionTouched, timeIsUp} from "../../redux/actions/game-actions";
import Question from "../../components/question";
import QuestionPresentation from "../../components/question-presentation";
import { Redirect } from "react-router-dom";
//
type MapStatePropsType = {
    question?: QuestionItem
    hearts: number
}
type MapDispatchPropsType = {
    questionTouched: (is: boolean) => void
    timeIsUp: () => void
}
type OwnProps = {}
//
type QuestionContainer = MapStatePropsType & MapDispatchPropsType & OwnProps

const QuestionContainer: React.FC<QuestionContainer> = ({question,questionTouched,timeIsUp,hearts}) => {
    useEffect(() => {
        if (!question) {
            return
        }
        questionTouched(false)
        const timerId=setTimeout(() => {
            setShow(true)
        },2000)
        return () => clearTimeout(timerId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[question])
    useEffect(() => {
        const timerId = setTimeout(() => {
            timeIsUp()
        },2000000)
        return () => clearTimeout(timerId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[question])

    const [show,setShow] = useState(false)
    const [isWrong,setIsWrong] = useState(false)
    if (!question) {
        return <Redirect to="/"/>
    }
    if (!show) {
        return <div><QuestionPresentation questionNumber={question?.questionNumber}/></div>
    }
    const questionChecker = (number: number) => (number === +question.rightAnswer?'correct':'wrong')
    return <Question
                     isWrong={isWrong} setIsWrong={setIsWrong}
                     question={question} hearts={hearts}
                     questionChecker={questionChecker} setShow={()=>setShow(false)}/>
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        question: getQuestionSelector(state),
        hearts: getHearts(state)
    }
}
const mapDispatchToProps = (dispatch: Dispatch<any>): MapDispatchPropsType => {
    return {
        questionTouched: (is: boolean) => dispatch(questionTouched(is)),
        timeIsUp: () => dispatch(timeIsUp())
    }
}






export default connect<MapStatePropsType,MapDispatchPropsType,OwnProps,AppStateType>(mapStateToProps, mapDispatchToProps)(QuestionContainer)