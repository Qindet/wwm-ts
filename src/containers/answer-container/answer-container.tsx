import React, {useEffect, useState} from "react";
import classes from '../../components/answer/answer.module.css'
import Answer from "../../components/answer/answer";
import {QuestionItem} from "../../types/state";

type AnswerContainer = {
    setShow: () => void,
    questionChecker: (number: number) => string,
    number: number,
    answer: string,
    correctAnswer: () => any
    numberOfCorrect: string
    isWrong: boolean
    setIsWrong: (ans: boolean) => void
    wrongAnswer: () => void
    addQuestionId: (questionId: { id:number }) => void
    question: QuestionItem
}

const AnswerContainer: React.FC<AnswerContainer> = ({question,addQuestionId,isWrong,setIsWrong,wrongAnswer,
                                                        questionChecker,number,answer,correctAnswer,setShow,numberOfCorrect})  => {
    useEffect(() => {
        if (!isWrong) {
            return
        }
        if (number===+numberOfCorrect) {
            setClazz(classes.QuestionItemCorrect)
        }
    },[isWrong])
    const [touched,setTouched]=useState(false)
    const [clazz,setClazz]=useState(classes.QuestionItemPong)
    const onClicked = async () => {
        if (touched) {return}
        let flag = true
        setTouched(true)
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
                correctAnswer()
                setClazz(classes.QuestionItemPong)
                addQuestionId({id:question.id})
                setShow()
            },2000)
        } else if (questionChecker(number) === 'wrong') {
            setClazz(classes.QuestionItemWrong)
            setIsWrong(true)
            setTimeout(() => {
                wrongAnswer()
                setClazz(classes.QuestionItemPong)
                setIsWrong(false)
                addQuestionId({id:question.id})

                // setTouched(false)
                setShow()
            },2000)
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





export default AnswerContainer