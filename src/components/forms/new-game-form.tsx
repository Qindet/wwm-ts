import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {NavLink, useHistory} from "react-router-dom";
import classes from './form-styles.module.css'
import {connect} from 'react-redux'
import {AppStateType} from "../../redux/reducers";
import {startingGameLoaded} from "../../redux/actions/starting-game";


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
            <h1>Add new question</h1>
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
                        <label htmlFor="playerName">Start the game</label>
                        <Field id="playerName" name="playerName"/>
                        {errors.playerName && touched.playerName ? <div>{errors.playerName}</div> : null}
                        <div className={classes.BtnForm}>
                            <button className="btn" type="submit">Submit</button>
                            <div>
                                <NavLink className="btn" to="/">Back</NavLink>
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