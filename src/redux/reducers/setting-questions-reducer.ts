import {Questions} from "../../types/state";
import {
    ADD_QUESTION_FAILED,
    ADD_QUESTION_LOADED,
    ADD_QUESTION_REQUESTED, GET_QUESTIONS_FAILED, GET_QUESTIONS_LOADED,
    GET_QUESTIONS_REQUESTED
} from "../actions/types";
import {ActionsAddingQuestions, ActionsGettingQuestions} from "../../types/actions-types/setting-questions";


const initialState: Questions = {
    questions: [],
    questionsLoaded: true,
    questionsError: false
}

const settingQuestionsReducer = (state=initialState,action:ActionsAddingQuestions|ActionsGettingQuestions) => {
    switch (action.type) {
        case ADD_QUESTION_REQUESTED:
        case GET_QUESTIONS_REQUESTED:
            return {
                ...state,
                questionsLoaded: true,
                questionsError: false
            }
        case ADD_QUESTION_LOADED:
            return {
                ...state,
                questions: [...state.questions,action.question],
                questionsLoaded: false,
                questionsError: false
            }
        case ADD_QUESTION_FAILED:
        case GET_QUESTIONS_FAILED:
            return {
                ...state,
                questionsLoaded: false,
                questionsError: action.error
            }
        case GET_QUESTIONS_LOADED:
            return {
                ...state,
                questions: action.questions,
                questionsLoaded: false,
                questionsError: false
            }
        default:
            return state
    }
}

export default settingQuestionsReducer