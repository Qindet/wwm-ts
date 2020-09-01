import {Questions} from "../../types/state";
import {
    ADD_QUESTION_FAILED,
    ADD_QUESTION_LOADED,
    ADD_QUESTION_REQUESTED, GET_QUESTIONS_FAILED, GET_QUESTIONS_LOADED,
    GET_QUESTIONS_REQUESTED
} from "../actions/types";
import {ActionsAddingQuestions, ActionsGettingQuestions} from "../../types/actions-types/setting-questions";


const initialState: Questions = {
    questions: [
        [{id:1, questionNumber:1,question: 'fdsf', firstAnswer:'fds',secondAnswer:'fds',thirdAnswer:'fds',fourthAnswer:'fds',rightAnswer: '2' }],
        [{id:1, questionNumber:1,question: 'fdsf', firstAnswer:'fds',secondAnswer:'fds',thirdAnswer:'fds',fourthAnswer:'fds',rightAnswer: '2' }],
        [{id:1, questionNumber:1,question: 'fdsf', firstAnswer:'fds',secondAnswer:'fds',thirdAnswer:'fds',fourthAnswer:'fds',rightAnswer: '2' }],
        [{id:1, questionNumber:1,question: 'fdsf', firstAnswer:'fds',secondAnswer:'fds',thirdAnswer:'fds',fourthAnswer:'fds',rightAnswer: '2' }]
    ],
    questionsLoaded: true,
    questionsError: false
}

const settingQuestionsReducer = (state=initialState,action:ActionsAddingQuestions|ActionsGettingQuestions) => {
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
        case GET_QUESTIONS_REQUESTED:
            return {
                ...state
            }
        case GET_QUESTIONS_LOADED:
            return {
                ...state,
                questionsLoaded: false,
                questionsError: false
            }
        case GET_QUESTIONS_FAILED:
            return {
                ...state
            }
        default:
            return state
    }
}

export default settingQuestionsReducer