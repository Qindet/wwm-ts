import {ActionsGameBegins, ActionsStartingGame} from "../../types/actions-types/game-actions";
import {Records} from "../../types/state";
import {
    ADD_RECORD_FAILED,
    ADD_RECORD_LOADED,
    ADD_RECORD_REQUESTED,
} from "../actions/types";
import {ActionsAddingRecord} from "../../types/actions-types/records-actions";


const initialState: Records = {
    loading: true,
    error: false,
    record: []
}



const recordReducer = (state=initialState,action:ActionsAddingRecord) => {
    switch (action.type) {
        case ADD_RECORD_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case ADD_RECORD_LOADED:
            return {
                ...state,
                loading: false,
                error: false,
                record: [...state.record, action.record]
            }
        case ADD_RECORD_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default recordReducer