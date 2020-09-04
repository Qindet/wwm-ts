import {ADD_ID_QUESTION, CORRECT_ANSWER, GAME_OVER, START_GAME_LOADED, WRONG_ANSWER} from "../../redux/actions/types";



export type ActionStartingGameLoaded = {
    type: typeof START_GAME_LOADED,
    playerName: string,
    idSession: number
}
export type ActionsStartingGame = ActionStartingGameLoaded

export type ActionCorrectAnswer = {
    type: typeof CORRECT_ANSWER
    award: number
}

export type ActionAddQuestionId = {
    type: typeof ADD_ID_QUESTION
    idQuestion: object
}

export type ActionWrongAnswer = {
    type: typeof WRONG_ANSWER
}

export type ActionGameOver = {
    type: typeof GAME_OVER
}
export type ActionsGameBegins = ActionCorrectAnswer  | ActionWrongAnswer | ActionGameOver | ActionAddQuestionId

