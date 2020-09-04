import {AppStateType} from "../redux/reducers";
import {createSelector} from 'reselect'
import * as _ from 'lodash'
import {QuestionItem} from "../types/state";

const getQuestions = (state: AppStateType) => {
    return state.settingQuestionsReducer.questions
}

const getCurrentGameStreak = (state: AppStateType) => {
    return state.gameReducer.playerStreak
}

export const getQuestionsIds = (state: AppStateType)=> {
    return state.gameReducer.questionsIds
}



export const getQuestionSelector = createSelector(getQuestions,getCurrentGameStreak,getQuestionsIds,
    (questions,streak, questionsIds)=> {
        if (questionsIds === null) {
            return
        }
        // _.pullAllBy(questions,questionsIds, 'id')
        const item = [...questions]
        _.pullAllBy(item,questionsIds,'id')
        console.log(item)
        const questionsFiltered = item.filter(q=>streak ===+q.questionNumber)
        const rand = Math.floor(Math.random()*questionsFiltered.length)
        return questionsFiltered.find((_,i)=> i===rand)
    })
