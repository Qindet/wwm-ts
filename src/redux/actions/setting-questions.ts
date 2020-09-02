import {QuestionItem} from "../../types/state";
import {
    ActionAddingQuestionFailed,
    ActionAddingQuestionLoaded,
    ActionAddingQuestionRequested,
    ActionGettingQuestionsFailed,
    ActionGettingQuestionsLoaded,
    ActionGettingQuestionsRequested,
    ActionsAddingQuestions, ActionsGettingQuestions
} from "../../types/actions-types/setting-questions";
import {
    ADD_QUESTION_FAILED,
    ADD_QUESTION_LOADED,
    ADD_QUESTION_REQUESTED, GET_QUESTIONS_FAILED,
    GET_QUESTIONS_LOADED,
    GET_QUESTIONS_REQUESTED
} from "./types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../reducers";
import MainService from "../../service";

const service = new MainService()

const addingQuestionRequested = (): ActionAddingQuestionRequested => {
    return {
        type: ADD_QUESTION_REQUESTED
    }
}

const addingQuestionLoaded = (question: QuestionItem): ActionAddingQuestionLoaded => {
    return {
        type: ADD_QUESTION_LOADED,
        question
    }
}

const addingQuestionFailed = (error: ErrorEvent): ActionAddingQuestionFailed => {
    return {
        type: ADD_QUESTION_FAILED,
        error: error.message
    }
}

export const addQuestion = (question: QuestionItem):
    ThunkAction<Promise<void>,AppStateType,unknown,ActionsAddingQuestions> =>
    async (dispatch) => {
    try {
        dispatch(addingQuestionRequested())
        await service.addQuestion(question)
        dispatch(addingQuestionLoaded(question))
    } catch (e) {
        dispatch(addingQuestionFailed(e))
    }
}

const gettingQuestionsRequested = (): ActionGettingQuestionsRequested => {
    return {
        type: GET_QUESTIONS_REQUESTED
    }
}

const gettingQuestionsLoaded = (questions: Array<QuestionItem>): ActionGettingQuestionsLoaded => {
    return {
        type: GET_QUESTIONS_LOADED,
        questions
    }
}

const gettingQuestionsFailed = (error: ErrorEvent): ActionGettingQuestionsFailed => {
    return {
        type: GET_QUESTIONS_FAILED,
        error: error.message
    }
}

export const getQuestions = ():
    ThunkAction<Promise<void>,AppStateType,unknown,ActionsGettingQuestions> =>
    async (dispatch) => {
        try {
            dispatch(gettingQuestionsRequested())
            const res: Array<QuestionItem> = await service.getQuestions()
            dispatch(gettingQuestionsLoaded(res))
        } catch (e) {
            dispatch(gettingQuestionsFailed(e))
        }
    }