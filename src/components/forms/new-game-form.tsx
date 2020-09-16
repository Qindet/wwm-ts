import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {NavLink, useHistory} from "react-router-dom";
import classes from './form-styles.module.css'
import {connect} from 'react-redux'
import {AppStateType} from "../../redux/reducers";
import {startingGameLoaded} from "../../redux/actions/game-actions";


const NewGameSchema = Yup.object().shape({
    playerName: Yup.string()
        .min(2, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Required'),
});

//
type MapStatePropsType = {}
type MapDispatchPropsType = {
    startGame: (playerName: string, idSession: number) => void
}
type OwnProps = {}
//

type NewGameForm = MapStatePropsType & MapDispatchPropsType & OwnProps

const NewGameForm: React.FC<NewGameForm> = ({startGame}) => {
    const match = useHistory()
    const initialValues = {
        playerName: ''
    }
    return (
        <div>
            <h1 className={classes.TextColorW}>Start the new game</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={NewGameSchema}
                onSubmit={({playerName}) => {
                    const idSession = Date.now()
                    startGame(playerName, idSession)
                    match.push(`/new-game/${idSession}`)
                }}
            >
                {({errors, touched}) => (
                    <Form>
                        <label htmlFor="playerName">Name</label>
                        <Field id="playerName" name="playerName"/>
                        {errors.playerName && touched.playerName ? <div className={classes.TextColorW}>{errors.playerName}</div> : null}
                        <div className={classes.BtnForm}>
                            <button className="btn btn-main" type="submit">Submit</button>
                            <div>
                                <NavLink className="btn btn-main" to="/">Back</NavLink>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

const mapDispatchToProps = (dispatch: React.Dispatch<any>): MapDispatchPropsType => {
    return {
        startGame: (playerName,idSession) => dispatch(startingGameLoaded(playerName,idSession))
    }
}



export default connect<MapStatePropsType,MapDispatchPropsType,OwnProps,AppStateType>(null,mapDispatchToProps)(NewGameForm)