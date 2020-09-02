import {
    ActionCorrectAnswer,
    ActionGameOver,
    ActionStartingGameLoaded,
    ActionWrongAnswer
} from "../../types/actions-types/game-actions";
import {CORRECT_ANSWER, GAME_OVER, START_GAME_LOADED, WRONG_ANSWER} from "./types";
import awardHelper from '../../utils/award-helper'


export const startingGameLoaded = (playerName: string, idSession: number): ActionStartingGameLoaded => {
    return {
        type: START_GAME_LOADED,
        playerName,
        idSession
    }
}

export const correctAnswer = (questionNumber: string): ActionCorrectAnswer => {
    const award = awardHelper(questionNumber)
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

export const gameOver = (): ActionGameOver => {
    return {
        type: GAME_OVER
    }
}