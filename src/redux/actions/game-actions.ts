import {
    ActionAddQuestionId,
    ActionCorrectAnswer,
    ActionGameOver,
    ActionStartingGameLoaded,
    ActionWrongAnswer
} from "../../types/actions-types/game-actions";
import {ADD_ID_QUESTION, CORRECT_ANSWER, GAME_OVER, START_GAME_LOADED, WRONG_ANSWER} from "./types";
import awardHelper from '../../utils/award-helper'


export const startingGameLoaded = (playerName: string, idSession: number): ActionStartingGameLoaded => {
    return {
        type: START_GAME_LOADED,
        playerName,
        idSession
    }
}

export const correctAnswer = (questionNumber: string): ActionCorrectAnswer => {
    const award = awardHelper(questionNumber.toString())
    return {
        type: CORRECT_ANSWER,
        award
    }
}

export const wrongAnswer = (): ActionWrongAnswer => {
    return {
        type: WRONG_ANSWER
    }
}

export const addQuestionId = (idQuestion: { id:number }): ActionAddQuestionId => {
    return {
        type: ADD_ID_QUESTION,
        idQuestion
    }
}

export const gameOver = (): ActionGameOver => {
    return {
        type: GAME_OVER
    }
}