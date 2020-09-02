import {
    ActionStartingGameLoaded
} from "../../types/actions-types/starting-game";
import { START_GAME_LOADED} from "./types";



export const startingGameLoaded = (playerName: string, idSession: number): ActionStartingGameLoaded => {
    return {
        type: START_GAME_LOADED,
        playerName,
        idSession
    }
}

