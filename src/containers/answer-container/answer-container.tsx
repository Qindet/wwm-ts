import React, { useState} from "react";
import classes from '../../components/answer/answer.module.css'
import Answer from "../../components/answer/answer";
import {wrongAnswer} from "../../redux/actions/game-actions";
import {QuestionItem} from "../../types/state";

type AnswerContainer = {
    setShow: (flag: boolean) => void,
    questionChecker: (number: number) => string,
    number: number,
    answer: string,
    correctAnswer: () => any
    numberOfCorrect: string
}

const AnswerContainer: React.FC<AnswerContainer> = ({questionChecker,number,answer,correctAnswer,setShow,numberOfCorrect})  => {
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
                setTouched(false)
                setShow(false)
            },2000)
        } else if (questionChecker(number) === 'wrong') {
            setClazz(classes.QuestionItemWrong)
            setTimeout(() => {
                wrongAnswer()
                setClazz(classes.QuestionItemPong)
                showCorrect()
                setTouched(false)
                setShow(false)
            },2000)
        }
    }
    const showCorrect = () => {
        console.log(number === +numberOfCorrect)
//
        if (number === +numberOfCorrect) {
            setClazz(classes.QuestionItemCorrect)
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