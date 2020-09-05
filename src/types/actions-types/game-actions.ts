import {
    ADD_ID_QUESTION, ADD_RECORD_FAILED, ADD_RECORD_LOADED, ADD_RECORD_REQUESTED,
    CORRECT_ANSWER,
    GAME_OVER, GET_QUESTIONS_FAILED, GET_QUESTIONS_LOADED,
    GET_QUESTIONS_REQUESTED, QUESTION_TOUCHED,
    START_GAME_LOADED,
    WRONG_ANSWER
} from "../../redux/actions/types";
import {QuestionItem} from "../state";



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
    idQuestion: { id: number }
}

export type ActionWrongAnswer = {
    type: typeof WRONG_ANSWER
}

export type ActionGameOver = {
    type: typeof GAME_OVER
}

export type ActionQuestionTouched = {
    type: typeof QUESTION_TOUCHED
}


export type ActionsGameBegins = ActionCorrectAnswer  | ActionWrongAnswer | ActionGameOver | ActionAddQuestionId | ActionQuestionTouched

