import {combineReducers} from 'redux'
import settingQuestionsReducer from "./setting-questions-reducer";
import gameReducer from "./game-reducer";
const rootReducer = combineReducers({settingQuestionsReducer,gameReducer})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export default rootReducer