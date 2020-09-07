import {AppStateType} from "../redux/reducers";
import {createSelector} from 'reselect'
import * as _ from 'lodash'

const getQuestions = (state: AppStateType) => {
    return state.settingQuestionsReducer.questions
}

const getCurrentGameStreak = (state: AppStateType) => {
    return state.gameReducer.playerStreak
}

export const getQuestionsIds = (state: AppStateType)=> {
    return state.gameReducer.questionsIds
}

export const getGameIsOver = (state: AppStateType)=> {
    return state.gameReducer.isGameOver
}

const getGameState = (state: AppStateType)=> {
    return state.gameReducer
}

export const getPlayerScore = (state: AppStateType)=> {
    const {idSession,playerName,playerRecord,playerStreak} = getGameState(state)
    return  {id:idSession,playerName,playerRecord,playerStreak}
}

export const getIsQuestionTouched = (state: AppStateType)=> {
    return state.gameReducer.isQuestionTouched
}



export const getQuestionSelector = createSelector(getQuestions,getCurrentGameStreak,getQuestionsIds,
    (questions,streak, questionsIds)=> {
        if (questionsIds === null) {
            return
        }
        const items = [...questions]
        _.pullAllBy(items,questionsIds,'id')
        const questionsFiltered = items.filter(q=>streak ===+q.questionNumber)
        const rand = Math.floor(Math.random()*questionsFiltered.length)
        return questionsFiltered.find((_,i)=> i===rand)
    })
