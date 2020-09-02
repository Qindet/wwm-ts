import React from "react";
import classes from './questions.module.css'
import {connect} from 'react-redux'
import {getQuestionSelector} from "../../selectors/game-selectors";
import {AppStateType} from "../../redux/reducers";
import {QuestionItem} from "../../types/state";

//
type MapStatePropsType = {
    question: QuestionItem | undefined
}
type MapDispatchPropsType = {}
type OwnProps = {}
//
type Question = MapStatePropsType & MapDispatchPropsType & OwnProps

const Question: React.FC<Question> = ({question={question:'ds'}}) => {

    return (
        <div className={classes.QM}>
            <div className={classes.QuestionMainBlock}>
                {question.question}


            </div>
            <div className={`collection ${classes.QuestionMain}`}>
                <a href="#!" className="collection-item">Alvin</a>
                <a href="#!" className="collection-item active">Alvin</a>
                <a href="#!" className="collection-item">Alvin</a>
                <a href="#!" className="collection-item">Alvin</a>
            </div>
        </div>

    )
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {

    return {
        question: getQuestionSelector(state)
    }
}

export default connect<MapStatePropsType,null,OwnProps,AppStateType>(mapStateToProps, null)(Question)