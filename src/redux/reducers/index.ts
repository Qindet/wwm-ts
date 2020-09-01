import {combineReducers} from 'redux'
import settingQuestionsReducer from "./setting-questions-reducer";
const rootReducer = combineReducers({settingQuestionsReducer})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export default rootReducer