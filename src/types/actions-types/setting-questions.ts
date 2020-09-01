import {QuestionItem} from "../state";
import {ADD_QUESTION_FAILED, ADD_QUESTION_LOADED, ADD_QUESTION_REQUESTED} from "../../redux/actions/types";


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

export type ActionsAddingQuestions = ActionAddingQuestionRequested | ActionAddingQuestionLoaded | ActionAddingQuestionFailed