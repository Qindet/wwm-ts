import {AppStateType} from "../redux/reducers";
import {createSelector} from 'reselect'

const getQuestionsFiltered = (state: AppStateType) => {
    return state.settingQuestionsReducer.questions.filter(q=>state.gameReducer.currentGamePlayerScore.idSession ===+q.questionNumber)
}

const getQuestionsLength = (state: AppStateType) => {
    return state.settingQuestionsReducer.questions.filter(q=>state.gameReducer.currentGamePlayerScore.idSession ===+q.questionNumber).length
}

export const getQuestionSelector = createSelector(getQuestionsFiltered,getQuestionsLength,
    (questions,length)=> {
    return questions.find((_,i)=>i===Math.floor(Math.random()*length)+1)
    })

