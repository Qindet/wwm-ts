import React, {Dispatch, useEffect, useState} from "react";
import {connect} from 'react-redux'
import {getHasHintHalf, getIsDisabledHintHalf, getQuestionSelector} from "../../selectors/game-selectors";
import {AppStateType} from "../../redux/reducers";
import {QuestionItem} from "../../types/state";
import {hintActivated, questionTouched, timeIsUp} from "../../redux/actions/game-actions";
import Question from "../../components/question";
//
type MapStatePropsType = {
    question?: QuestionItem,
    hasHintHalf: boolean
}
type MapDispatchPropsType = {
    questionTouched: (is: boolean) => void
    timeIsUp: () => void
    activateHint: () => void
}
type OwnProps = {}
//
type QuestionContainer = MapStatePropsType & MapDispatchPropsType & OwnProps

const QuestionContainer: React.FC<QuestionContainer> = ({question,questionTouched,timeIsUp, hasHintHalf,activateHint}) => {
    useEffect(() => {
        if (!question) {
            return
        }
        questionTouched(false)
        const timerId=setTimeout(() => {
            setShow(true)
        },2000)
        return () => clearTimeout(timerId)
    },[question])
    useEffect(() => {
        const timerId = setTimeout(() => {
            timeIsUp()
        },20000)
        return () => clearTimeout(timerId)
    },[question])

    const [show,setShow] = useState(false)
    const [isWrong,setIsWrong] = useState(false)
    if (!question) {
        return <div>empty</div>
    }
    if (!show) {
        return <div>{question.questionNumber}</div>
    }
    const questionChecker = (number: number) => (number === +question.rightAnswer?'correct':'wrong')
    return <Question
                     isWrong={isWrong} setIsWrong={setIsWrong} activateHint={activateHint}
                     question={question} hasHintHalf={hasHintHalf}
                     questionChecker={questionChecker} setShow={()=>setShow(false)}/>
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        question: getQuestionSelector(state),
        hasHintHalf: getHasHintHalf(state)
    }
}
const mapDispatchToProps = (dispatch: Dispatch<any>): MapDispatchPropsType => {
    return {
        questionTouched: (is: boolean) => dispatch(questionTouched(is)),
        timeIsUp: () => dispatch(timeIsUp()),
        activateHint: () => dispatch(hintActivated())
    }
}






export default connect<MapStatePropsType,MapDispatchPropsType,OwnProps,AppStateType>(mapStateToProps, mapDispatchToProps)(QuestionContainer)