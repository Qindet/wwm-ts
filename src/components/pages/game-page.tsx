import React from "react";
import QuestionContainer from "../../containers/question-container/question-container";
import {connect} from 'react-redux'
import {AppStateType} from "../../redux/reducers";
import {getGameIsOver} from "../../selectors/game-selectors";
import { Redirect } from "react-router-dom";

type MapStateToProps = {
    isGameOver: boolean
}
type OwnProps = {}

type GamePage = MapStateToProps & OwnProps

const GamePage: React.FC<GamePage> = ({isGameOver}) => {
    let content
    if (!isGameOver) {
        content =  <QuestionContainer/>
    } else {
        content = <Redirect to="/final-score"/>
    }
    return <div className="bg-color">
            <div className="game-container">
                {content}
            </div>
        </div>

}

const mapStateToProps = (state: AppStateType) => {
    return {
        isGameOver: getGameIsOver(state)
    }
}

export default connect<MapStateToProps,null,OwnProps,AppStateType>(mapStateToProps)(GamePage)