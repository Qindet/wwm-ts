import {ActionsGameBegins, ActionsStartingGame} from "../../types/actions-types/game-actions";
import {CurrentGamePlayerScore} from "../../types/state";
import {ADD_ID_QUESTION, CORRECT_ANSWER, GAME_OVER, START_GAME_LOADED, WRONG_ANSWER} from "../actions/types";


const initialState: CurrentGamePlayerScore = {
        idSession: 1,
        playerName: '',
        playerRecord: 1,
        playerStreak: 1,
        hearts: 2,
        isGameOver: false,
        safePoint: 1,
        safeRecords: [100,1000,32000,1000000],
        questionsIds: []
}

const correctAnswerChecker = (playerStreak: number, safePoint: number) => {
    if (playerStreak===5) {
        return  5
    } else if (playerStreak===10) {
        return  10
    } else if (playerStreak===15) {
        return  15
    } else {
        return safePoint
    }
}
const streakChecker = (playerStreak: number, safeRecords: Array<number>) => {
    if (playerStreak===2 || playerStreak===1) {
        return  0
    } else if (playerStreak>=1 && playerStreak < 5) {
        return safeRecords[0]
    } else if (playerStreak>=5 && playerStreak < 10) {
        return safeRecords[1]
    } else if (playerStreak>=10 && playerStreak < 15) {
       return safeRecords[2]
    } else {
       return safeRecords[3]
    }
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
            let safePoint = correctAnswerChecker(state.playerStreak,state.safePoint)
            return {
                ...state,
                playerRecord: action.award,
                playerStreak: state.playerStreak + 1,
                safePoint: safePoint
            }
        case WRONG_ANSWER:
            let gameOver = state.isGameOver
            let newHearts = state.hearts
            let newPlayerStreak = state.playerStreak
            if (state.hearts >=1) {
                newHearts= state.hearts-1
                newPlayerStreak= state.safePoint
            } else {
                gameOver = true
            }
           const playerRecord: number = streakChecker(state.playerStreak,state.safeRecords)
            return {
                ...state,
                hearts: newHearts,
                playerStreak: newPlayerStreak,
                isGameOver: gameOver,
                playerRecord: playerRecord
            }
        case ADD_ID_QUESTION:
            let items = [...state.questionsIds]
            const idx =state.questionsIds.findIndex((i)=> i.id===action.idQuestion.id)
            if (idx===-1) {
                items = [...state.questionsIds, action.idQuestion]
            }
            if (!items) {
                items= []
            }
            return {
                ...state,
                questionsIds: items
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