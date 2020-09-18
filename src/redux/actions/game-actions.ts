import {
    ActionAddQuestionId,
    ActionCorrectAnswer,
    ActionQuestionTouched,
    ActionStartingGameLoaded,
    ActionTimeIsUp,
    ActionWrongAnswer
} from "../../types/actions-types/game-actions";
import {
    ADD_ID_QUESTION,
    CORRECT_ANSWER,
    QUESTION_TOUCHED,
    START_GAME_LOADED,
    TIME_IS_UP,
    WRONG_ANSWER
} from "./types";
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

export const timeIsUp = (): ActionTimeIsUp => {
    return {
        type: TIME_IS_UP
    }
}



export const questionTouched = (is: boolean): ActionQuestionTouched => {
    return {
        type: QUESTION_TOUCHED,
        is
    }
}