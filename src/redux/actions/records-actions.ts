import MainService from "../../service";
import {ActionsAddingQuestions} from "../../types/actions-types/setting-questions";
import {ADD_RECORD_FAILED, ADD_RECORD_LOADED, ADD_RECORD_REQUESTED} from "./types";
import {QuestionItem} from "../../types/state";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../reducers";
import {
    ActionAddingRecordFailed,
    ActionAddingRecordLoaded,
    ActionAddingRecordRequested,
    ActionPlayerRecord, ActionsAddingRecord
} from "../../types/actions-types/records-actions";

const service = new MainService()

const addingRecordRequested = (): ActionAddingRecordRequested => {
    return {
        type: ADD_RECORD_REQUESTED
    }
}

const addingRecordLoaded = (record: ActionPlayerRecord): ActionAddingRecordLoaded => {
    return {
        type: ADD_RECORD_LOADED,
        record
    }
}

const addingRecordFailed = (error: ErrorEvent): ActionAddingRecordFailed => {
    return {
        type: ADD_RECORD_FAILED,
        error: error.message
    }
}



export const addRecord = (record: ActionPlayerRecord):
    ThunkAction<Promise<void>,AppStateType,unknown,ActionsAddingRecord> =>
    async (dispatch) => {
        try {
            dispatch(addingRecordRequested())
            await service.addRecord(record)
            dispatch(addingRecordLoaded(record))
        } catch (e) {
            dispatch(addingRecordFailed(e))
        }
    }