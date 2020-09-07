import React, {Dispatch, useEffect, useState} from "react";
import classes from '../../components/answer/answer.module.css'
import Answer from "../../components/answer/answer";
import {QuestionItem} from "../../types/state";
import {addQuestionId, correctAnswer, questionTouched, wrongAnswer} from "../../redux/actions/game-actions";
import {connect} from 'react-redux'
import {AppStateType} from "../../redux/reducers";
import {getIsQuestionTouched} from "../../selectors/game-selectors";


//
type MapStatePropsType = {
    isQuestionTouched: boolean
}
type MapDispatchPropsType = {
    correctAnswer: (questionNumber: string) => void
    wrongAnswer: () => void
    addQuestionId: (questionId: { id:number }) => void
    questionTouched: (is: boolean) => void
}
type OwnProps = {
    setShow: () => void
    questionChecker: (number: number) => string
    number: number
    answer: string
    isWrong: boolean
    setIsWrong: (ans: boolean) => void
    question: QuestionItem
}
type AnswerContainer = MapStatePropsType & MapDispatchPropsType & OwnProps
//

const AnswerContainer: React.FC<AnswerContainer> = ({question,addQuestionId,isWrong,setIsWrong,wrongAnswer,
                                                        questionChecker,number,answer,correctAnswer,setShow,isQuestionTouched,questionTouched})  => {
    useEffect(() => {
        if (!isWrong) {
            return
        }
        if (number===+question.rightAnswer) {
            setClazz(classes.QuestionItemCorrect)
        }
    },[isWrong])

    const [clazz,setClazz]=useState(classes.QuestionItemPong)
    const onClicked = async () => {
        if (isQuestionTouched) {return }
        let flag = true
        questionTouched(true)
        const timerId = setInterval(() => {
            changeColor(flag)
            flag=!flag
        },500)
        await new Promise(resolve => {
            setTimeout(()=>{
                resolve(clearInterval(timerId))
            },5000)
        })
        if (questionChecker(number) === 'correct') {
            setClazz(classes.QuestionItemCorrect)
            setTimeout(() => {
                correctAnswer(question.questionNumber)
                setClazz(classes.QuestionItemPong)
                addQuestionId({id:question.id})
                setShow()
            },2000)
        } else if (questionChecker(number) === 'wrong') {
            setClazz(classes.QuestionItemWrong)
           setTimeout(() => {
               setIsWrong(true)
           },1000)
            setTimeout(() => {
                wrongAnswer()
                setIsWrong(false)
                addQuestionId({id:question.id})
                setShow()
            },3000)
        }
    }
    const changeColor = (blink: boolean) => {
        if (blink) {
            setClazz(classes.QuestionItemPong)
        } else {
            setClazz(classes.QuestionItemPing)
        }
    }
    return <Answer clazz={clazz} onClicked={onClicked} answer={answer}/>
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isQuestionTouched: getIsQuestionTouched(state)
    }
}


const mapDispatchToProps = (dispatch: Dispatch<any>): MapDispatchPropsType => {
    return {
        correctAnswer: (questionNumber) => dispatch(correctAnswer(questionNumber)),
        wrongAnswer: () => dispatch(wrongAnswer()),
        addQuestionId: (questionId)=> dispatch(addQuestionId(questionId)),
        questionTouched: (is) => dispatch(questionTouched(is))
    }
}





export default connect<MapStatePropsType,MapDispatchPropsType,OwnProps,AppStateType>(mapStateToProps,mapDispatchToProps)(AnswerContainer)