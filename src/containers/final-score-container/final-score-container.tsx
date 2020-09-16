import React, {useEffect} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reducers";
import {getPlayerScore} from "../../selectors/game-selectors";
import {ActionPlayerRecord} from "../../types/actions-types/records-actions";
import {addRecord} from "../../redux/actions/records-actions";
import { Redirect } from "react-router-dom";
import FinalScore from "../../components/final-score";



//
type MapStatePropsType = {
    playerFinalScore: ActionPlayerRecord
}
type MapDispatchPropsType = {
    addRecord: (record: ActionPlayerRecord) => void
}
type OwnProps = {}
//

type FinalScoreContainer = MapStatePropsType & MapDispatchPropsType & OwnProps

const FinalScoreContainer: React.FC<FinalScoreContainer> = ({playerFinalScore,addRecord}) => {

    useEffect(() => {
        if (playerFinalScore.playerName==='') {
            return
        }
        addRecord(playerFinalScore)
    },[])

    if (playerFinalScore.playerName==='') {
        return <Redirect to='/'/>
    }
    return <div className="bg-color">
        <FinalScore
            playerName={playerFinalScore.playerName}
            playerRecord={playerFinalScore.playerRecord}
            playerStreak={playerFinalScore.playerStreak}/>
    </div>
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        playerFinalScore: getPlayerScore(state)
    }
}

const mapDispatchToProps = (dispatch: React.Dispatch<any>): MapDispatchPropsType => {
    return {
        addRecord: (record)=>dispatch(addRecord(record))
    }
}

export default connect<MapStatePropsType,MapDispatchPropsType,OwnProps,AppStateType>(mapStateToProps,mapDispatchToProps)(FinalScoreContainer)