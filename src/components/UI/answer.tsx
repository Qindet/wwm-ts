import React, {useEffect, useState} from "react";
import classes from './answer.module.css'

type Answer = {
    setShow: (flag: boolean) => void,
    questionChecker: (number: number) => string,
    number: number,
    answer: string,
    correctAnswer: () => any
}

const Answer: React.FC<Answer> = ({questionChecker,number,answer,correctAnswer,setShow})  => {
    const [touched,setTouched]=useState(false)
    const [clazz,setClazz]=useState(classes.QuestionItemPong)
    const onClicked = async () => {
        if (touched) {
            return
        }
        let flag= true
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
        } else {
            setClazz(classes.QuestionItemWrong)
        }

    }
    const changeColor = (blink: boolean) => {
        if (blink) {
            setClazz(classes.QuestionItemPong)
        } else {
            setClazz(classes.QuestionItemPing)
        }
    }
    return <div>
        <div onClick={onClicked} className={`${classes.QuestionItem} ${clazz}`}>{answer}</div>
    </div>
}

export default Answer