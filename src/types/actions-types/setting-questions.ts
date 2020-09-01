import {QuestionItem} from "../state";
import {
    ADD_QUESTION_FAILED,
    ADD_QUESTION_LOADED,
    ADD_QUESTION_REQUESTED, GET_QUESTIONS_FAILED, GET_QUESTIONS_LOADED,
    GET_QUESTIONS_REQUESTED
} from "../../redux/actions/types";


export type ActionAddingQuestionRequested = {
    type:  typeof ADD_QUESTION_REQUESTED
}

export type ActionAddingQuestionLoaded = {
    type: typeof ADD_QUESTION_LOADED,
    question: QuestionItem
}

export type ActionAddingQuestionFailed = {
    type: typeof ADD_QUESTION_FAILED,
    error: string
}

export type ActionGettingQuestionsRequested = {
    type:  typeof GET_QUESTIONS_REQUESTED
}

export type ActionGettingQuestionsLoaded = {
    type:  typeof GET_QUESTIONS_LOADED,
}

export type ActionGettingQuestionsFailed = {
    type:  typeof GET_QUESTIONS_FAILED
}

export type ActionsAddingQuestions = ActionAddingQuestionRequested | ActionAddingQuestionLoaded | ActionAddingQuestionFailed
export type ActionsGettingQuestions = ActionGettingQuestionsRequested | ActionGettingQuestionsLoaded | ActionGettingQuestionsFailed