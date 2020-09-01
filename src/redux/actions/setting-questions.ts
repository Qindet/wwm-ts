import {QuestionItem} from "../../types/state";
import {
    ActionAddingQuestionFailed,
    ActionAddingQuestionLoaded,
    ActionAddingQuestionRequested, ActionsAddingQuestions
} from "../../types/actions-types/setting-questions";
import {ADD_QUESTION_FAILED, ADD_QUESTION_LOADED, ADD_QUESTION_REQUESTED} from "./types";
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
        console.log(e)
        dispatch(addingQuestionFailed(e))
    }
}