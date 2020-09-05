import {ADD_RECORD_FAILED, ADD_RECORD_LOADED, ADD_RECORD_REQUESTED} from "../../redux/actions/types";

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


export type ActionsAddingRecord = ActionAddingRecordRequested | ActionAddingRecordLoaded | ActionAddingRecordFailed