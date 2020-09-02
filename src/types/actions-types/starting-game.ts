import { START_GAME_LOADED} from "../../redux/actions/types";



export type ActionStartingGameLoaded = {
    type: typeof START_GAME_LOADED,
    playerName: string,
    idSession: number
}


export type ActionsStartingGame = ActionStartingGameLoaded