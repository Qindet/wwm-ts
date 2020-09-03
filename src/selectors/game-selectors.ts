import {AppStateType} from "../redux/reducers";
import {createSelector} from 'reselect'

const getQuestions = (state: AppStateType) => {
    return state.settingQuestionsReducer.questions
}

const getCurrentGameStreak = (state: AppStateType) => {
    return state.gameReducer.playerStreak
}

export const getQuestionSelector = createSelector(getQuestions,getCurrentGameStreak,
    (questions,streak)=> {

        const questionsFiltered = questions.filter(q=>streak ===+q.questionNumber)
        console.log(questions)
        const rand = Math.floor(Math.random()*questionsFiltered.length)
        return questionsFiltered.find((_,i)=> i===rand)
    })
