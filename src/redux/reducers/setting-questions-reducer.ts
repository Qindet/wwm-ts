import {Questions} from "../../types/state";
import {ADD_QUESTION_FAILED, ADD_QUESTION_LOADED, ADD_QUESTION_REQUESTED} from "../actions/types";
import {ActionsAddingQuestions} from "../../types/actions-types/setting-questions";


const initialState: Questions = {
    questions: [
        [{id:1, questionNumber:1,question: 'fdsf', firstAnswer:'fds',secondAnswer:'fds',thirdAnswer:'fds',fourthAnswer:'fds',rightAnswer: 2 }],
        [{id:1, questionNumber:1,question: 'fdsf', firstAnswer:'fds',secondAnswer:'fds',thirdAnswer:'fds',fourthAnswer:'fds',rightAnswer: 2 }],
        [{id:1, questionNumber:1,question: 'fdsf', firstAnswer:'fds',secondAnswer:'fds',thirdAnswer:'fds',fourthAnswer:'fds',rightAnswer: 2 }],
        [{id:1, questionNumber:1,question: 'fdsf', firstAnswer:'fds',secondAnswer:'fds',thirdAnswer:'fds',fourthAnswer:'fds',rightAnswer: 2 }]
    ],
    questionsLoaded: true,
    questionsError: false
}

const settingQuestionsReducer = (state=initialState,action:ActionsAddingQuestions) => {
    switch (action.type) {
        case ADD_QUESTION_REQUESTED:
            return {
                ...state,
                questionsLoaded: true,
                questionsError: false
            }
        case ADD_QUESTION_LOADED:
                const level = action.question.questionNumber
                const item = [...state.questions[level],action.question]
                const items = [...state.questions ]
                items[level] = item
            return {
                ...state,
                questions:items,
                questionsLoaded: false,
                questionsError: false
            }
        case ADD_QUESTION_FAILED:
            return {
                ...state,
                questionsError: action.error
            }
        default:
            return state
    }
}

export default settingQuestionsReducer