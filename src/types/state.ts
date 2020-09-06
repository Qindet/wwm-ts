import {ActionPlayerRecord} from "./actions-types/records-actions";

export type QuestionItem = {
    id: number
    questionNumber: string
    question: string
    firstAnswer: string
    secondAnswer: string
    thirdAnswer: string
    fourthAnswer: string
    rightAnswer: string
}



export type CurrentGamePlayerScore = {
    idSession: number
    playerName: string
    playerRecord: number
    playerStreak: number
    hearts: number
    isGameOver: boolean
    safePoint: number
    safeRecords: Array<number>
    questionsIds: Array<{ id: number }>
    isQuestionTouched: boolean
    hints: { halfQuestion: {  quantity: number, has: boolean, activated: boolean }  }
}

export type Records = {
    loading: boolean
    error: string | boolean
    record: Array<ActionPlayerRecord>
}

export type Questions =  {
    questions: Array<QuestionItem>,
    questionsLoaded: boolean,
    questionsError: boolean | string
}
