import React from "react";
import classes from './final-score.module.css'
import {NavLink} from "react-router-dom";

type FinalScore = {
    playerName: string
    playerRecord: number
    playerStreak: number
}

const FinalScore: React.FC<FinalScore> = ({playerStreak,playerRecord,playerName}) => (
    <div className={classes.FinalScoreWrapper}>
        <div className={classes.FinalScoreTextMain}>FINAL RESULT</div>
        <span className={classes.FinalScoreTextPre}>Name: </span> <span className={classes.FinalScoreTextMain}>{playerName}</span><br/>
        <span className={classes.FinalScoreTextPre}>Final score</span> <span className={classes.FinalScoreTextMain}>>{playerRecord}</span><br/>
        <span className={classes.FinalScoreTextPre}>Player streak</span> <span className={classes.FinalScoreTextMain}>>{playerStreak}</span><br/>
        <NavLink to="/" className="btn">Back to menu</NavLink>
    </div>
)

export default FinalScore