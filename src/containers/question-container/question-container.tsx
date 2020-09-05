import React, {Dispatch, useEffect, useState} from "react";
import {connect} from 'react-redux'
import {getQuestionSelector} from "../../selectors/game-selectors";
import {AppStateType} from "../../redux/reducers";
import {QuestionItem} from "../../types/state";
import { addQuestionId, correctAnswer, wrongAnswer} from "../../redux/actions/game-actions";
import Question from "../../components/question";
//
type MapStatePropsType = {
    question?: QuestionItem
}
type MapDispatchPropsType = {
    // correctAnswer: (questionNumber: string) => void
    // wrongAnswer: () => void
    // addQuestionId: (questionId: { id:number }) => void
}
type OwnProps = {}
//
type QuestionContainer = MapStatePropsType & MapDispatchPropsType & OwnProps

const QuestionContainer: React.FC<QuestionContainer> = ({question}) => {
    useEffect(() => {
        if (!question) {
            return
        }
        const timerId=setTimeout(() => {
            setShow(true)
        },2000)
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
                     isWrong={isWrong} setIsWrong={setIsWrong}
                     question={question}
                     questionChecker={questionChecker} setShow={()=>setShow(false)}/>
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        question: getQuestionSelector(state)
    }
}
// const mapDispatchToProps = (dispatch: Dispatch<any>): MapDispatchPropsType => {
//     return {
//         correctAnswer: (questionNumber) => dispatch(correctAnswer(questionNumber)),
//         wrongAnswer: () => dispatch(wrongAnswer()),
//         addQuestionId: (questionId)=> dispatch(addQuestionId(questionId))
//     }
// }






export default connect<MapStatePropsType,null,OwnProps,AppStateType>(mapStateToProps, null)(QuestionContainer)