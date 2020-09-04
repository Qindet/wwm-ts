import {AppStateType} from "../redux/reducers";
import {createSelector} from 'reselect'
import * as _ from 'lodash'

const getQuestions = (state: AppStateType) => {
    return state.settingQuestionsReducer.questions
}

const getCurrentGameStreak = (state: AppStateType) => {
    // @ts-ignore
    return state.gameReducer.playerStreak
}

const getQuestionsIds = (state: AppStateType)=> {
    // @ts-ignore
    return state.gameReducer.questionsIds
}



export const getQuestionSelector = createSelector(getQuestions,getCurrentGameStreak,getQuestionsIds,
    (questions,streak, questionsIds)=> {
        if (questionsIds === null) {
            return
        }
        // _.pullAllBy(questions,questionsIds, 'id')

        const questionsFiltered = questions.filter(q=>streak ===+q.questionNumber)
        const rand = Math.floor(Math.random()*questionsFiltered.length)
        return questionsFiltered.find((_,i)=> i===rand)
    })
