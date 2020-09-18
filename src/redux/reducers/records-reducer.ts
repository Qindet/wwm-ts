import {Records} from "../../types/state";
import {
    ADD_RECORD_FAILED,
    ADD_RECORD_LOADED,
    ADD_RECORD_REQUESTED, GET_RECORDS_FAILED, GET_RECORDS_LOADED, GET_RECORDS_REQUESTED,
} from "../actions/types";
import {ActionsAddingRecord, ActionsGettingRecords} from "../../types/actions-types/records-actions";


const initialState: Records = {
    loading: true,
    error: false,
    records: []
}



const recordReducer = (state=initialState,action:ActionsAddingRecord | ActionsGettingRecords) => {
    switch (action.type) {
        case ADD_RECORD_REQUESTED:
        case GET_RECORDS_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case ADD_RECORD_LOADED:
            return {
                ...state,
                loading: false,
                error: false,
                records: [...state.records, action.record]
            }
        case ADD_RECORD_FAILED:
        case GET_RECORDS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case GET_RECORDS_LOADED:
            return {
                ...state,
                loading: false,
                error: false,
                records: action.records
            }
        default:
            return state
    }
}

export default recordReducer