import {
    ADD_RECORD_FAILED,
    ADD_RECORD_LOADED,
    ADD_RECORD_REQUESTED, GET_QUESTIONS_FAILED, GET_QUESTIONS_LOADED,
    GET_QUESTIONS_REQUESTED, GET_RECORDS_FAILED, GET_RECORDS_LOADED, GET_RECORDS_REQUESTED
} from "../../redux/actions/types";

export type ActionPlayerRecord = {
    id: number
    playerName: string
    playerRecord: number
    playerStreak: number
}

export type ActionAddingRecordRequested = {
    type:  typeof ADD_RECORD_REQUESTED
}

export type ActionAddingRecordLoaded = {
    type:  typeof ADD_RECORD_LOADED,
    record: ActionPlayerRecord
}

export type ActionAddingRecordFailed = {
    type:  typeof ADD_RECORD_FAILED,
    error: string
}

export type ActionGettingRecordsRequested = {
    type:  typeof GET_RECORDS_REQUESTED
}

export type ActionGettingRecordsLoaded = {
    type:  typeof GET_RECORDS_LOADED,
    records: Array<ActionPlayerRecord>
}

export type ActionGettingRecordsFailed = {
    type:  typeof GET_RECORDS_FAILED,
    error: string
}



export type ActionsAddingRecord = ActionAddingRecordRequested | ActionAddingRecordLoaded | ActionAddingRecordFailed
export type ActionsGettingRecords = ActionGettingRecordsRequested | ActionGettingRecordsLoaded | ActionGettingRecordsFailed