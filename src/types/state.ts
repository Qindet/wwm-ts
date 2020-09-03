export type QuestionItem = {
    id: number
    questionNumber: string,
    question: string,
    firstAnswer: string,
    secondAnswer: string,
    thirdAnswer: string,
    fourthAnswer: string,
    rightAnswer: string
}

export type CurrentGamePlayerScore = {
    idSession: number,
    playerName: string,
    playerRecord: number,
    playerStreak: number,
    hearts: number,
    isGameOver: boolean
}



export type Questions =  {
    questions: Array<QuestionItem>,
    questionsLoaded: boolean,
    questionsError: boolean | string
}
