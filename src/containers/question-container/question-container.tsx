import React, {Dispatch, useEffect, useState} from "react";
import {connect} from 'react-redux'
import {
    getHasHintHalf,
    getIsActivatedHintHalf,
    getIsQuestionTouched, getIsTouched,
    getQuestionSelector
} from "../../selectors/game-selectors";
import {AppStateType} from "../../redux/reducers";
import {QuestionItem} from "../../types/state";
import {hintActivated, hintDeactivated, questionTouched, timeIsUp} from "../../redux/actions/game-actions";
import Question from "../../components/question";
//
type MapStatePropsType = {
    question?: QuestionItem
    hasHintHalf: boolean
    isHintHalfActivated: boolean
}
type MapDispatchPropsType = {
    questionTouched: (is: boolean) => void
    timeIsUp: () => void
    activateHint: () => void
    deactivateHint: () => void
}
type OwnProps = {}
//
type QuestionContainer = MapStatePropsType & MapDispatchPropsType & OwnProps

const QuestionContainer: React.FC<QuestionContainer> = ({question,questionTouched,timeIsUp, hasHintHalf,activateHint,deactivateHint,isHintHalfActivated}) => {
    useEffect(() => {
        if (!question) {
            return
        }
        questionTouched(false)
        deactivateHint()
        const timerId1=setTimeout(() => {
            setShow(true)
        },2000)
        const timerId2 = setTimeout(() => {
            timeIsUp()
        },20000)
        return () => {clearTimeout(timerId1);clearTimeout(timerId2)}
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
                     isWrong={isWrong} setIsWrong={setIsWrong} activateHint={() => {  if(hasHintHalf && !isHintHalfActivated) {activateHint()}}}
                     question={question} hasHintHalf={hasHintHalf} isHintHalfActivated={isHintHalfActivated}
                     questionChecker={questionChecker} setShow={()=>setShow(false)}/>
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        question: getQuestionSelector(state),
        hasHintHalf: getHasHintHalf(state),
        isHintHalfActivated: getIsActivatedHintHalf(state)
    }
}
const mapDispatchToProps = (dispatch: Dispatch<any>): MapDispatchPropsType => {
    return {
        questionTouched: (is) => dispatch(questionTouched(is)),
        timeIsUp: () => dispatch(timeIsUp()),
        activateHint: () => dispatch(hintActivated()),
        deactivateHint: () => dispatch(hintDeactivated())
    }
}






export default connect<MapStatePropsType,MapDispatchPropsType,OwnProps,AppStateType>(mapStateToProps, mapDispatchToProps)(QuestionContainer)