import {ActionsStartingGame} from "../../types/actions-types/starting-game";
import {Game} from "../../types/state";
import {START_GAME_LOADED} from "../actions/types";


const initialState: Game = {
    currentGamePlayerScore: {
        idSession: 1,
        playerName: '',
        playerRecord: 1,
        playerStreak: 1
    }
}

const gameReducer = (state=initialState,action:ActionsStartingGame) => {
    switch (action.type) {
        case START_GAME_LOADED:
            return {
                ...state,
                currentGamePlayerScore: {playerName: action.playerName,playerRecord: 0,idSession: action.idSession,playerStreak: 1}
            }
        default:
            return state
    }
}

export default gameReducer