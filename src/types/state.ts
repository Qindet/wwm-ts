export type QuestionItem = {
    id: number
    questionNumber: number,
    question: string,
    firstAnswer: string,
    secondAnswer: string,
    thirdAnswer: string,
    fourthAnswer: string,
    rightAnswer: string
}

export type QuestionLevelItem = Array<QuestionItem>


export type Questions =  {
    questions: Array<QuestionLevelItem>,
    questionsLoaded: boolean,
    questionsError: boolean | string
}