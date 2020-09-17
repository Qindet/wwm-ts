import MainService from "../../service";
import {
    ADD_RECORD_FAILED,
    ADD_RECORD_LOADED,
    ADD_RECORD_REQUESTED,
    GET_RECORDS_FAILED,
    GET_RECORDS_LOADED,
    GET_RECORDS_REQUESTED
} from "./types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../reducers";
import {
    ActionAddingRecordFailed,
    ActionAddingRecordLoaded,
    ActionAddingRecordRequested,
    ActionGettingRecordsFailed,
    ActionGettingRecordsLoaded,
    ActionGettingRecordsRequested,
    ActionPlayerRecord,
    ActionsAddingRecord, ActionsGettingRecords
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

const gettingRecordsRequested = (): ActionGettingRecordsRequested => {
    return {
        type: GET_RECORDS_REQUESTED
    }
}

const gettingRecordsLoaded = (records: Array<ActionPlayerRecord>): ActionGettingRecordsLoaded => {
    return {
        type: GET_RECORDS_LOADED,
        records
    }
}

const gettingRecordsFailed = (error: ErrorEvent): ActionGettingRecordsFailed => {
    return {
        type: GET_RECORDS_FAILED,
        error: error.message
    }
}

export const getRecords = ():
    ThunkAction<Promise<void>,AppStateType,unknown,ActionsGettingRecords> =>
    async (dispatch) => {
        try {
            dispatch(gettingRecordsRequested())
            const records = await service.getRecords()
            dispatch(gettingRecordsLoaded(records))
        } catch (e) {
            dispatch(gettingRecordsFailed(e))
        }
    }