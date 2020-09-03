import {ActionsGameBegins, ActionsStartingGame} from "../../types/actions-types/game-actions";
import {CurrentGamePlayerScore} from "../../types/state";
import {CORRECT_ANSWER, GAME_OVER, START_GAME_LOADED, WRONG_ANSWER} from "../actions/types";


const initialState: CurrentGamePlayerScore = {
        idSession: 1,
        playerName: '',
        playerRecord: 1,
        playerStreak: 1,
        hearts: 2,
        isGameOver: false
}

const gameReducer = (state=initialState,action:ActionsStartingGame | ActionsGameBegins) => {
    switch (action.type) {
        case START_GAME_LOADED:
            return {
                ...state,
                playerName: action.playerName,
                playerRecord: 0,
                idSession: action.idSession
            }
        case CORRECT_ANSWER:
            return {
                ...state,
                playerRecord: action.award,
                playerStreak: state.playerStreak + 1
            }
        case WRONG_ANSWER:
            return {
                ...state,
                hearts: state.hearts-1
            }
        case GAME_OVER:
            return {
                ...state,
                isGameOver: true
            }
        default:
            return state
    }
}

export default gameReducer