import React from 'react'
import classes from './question-presentation.module.css'

type QuestionPresentation = {
    questionNumber: string
}


const QuestionPresentation: React.FC<QuestionPresentation> = ({questionNumber}) => (
    <div className={classes.NumberWrapper}>
        <div className={classes.NumberMain}>{questionNumber}</div>
    </div>
)

export default QuestionPresentation