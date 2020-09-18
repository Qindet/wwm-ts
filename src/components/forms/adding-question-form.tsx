import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import {NavLink} from "react-router-dom";
import classes from './form-styles.module.css'
import {QuestionItem} from "../../types/state";
import {connect} from 'react-redux'
import {AppStateType} from "../../redux/reducers";
import {addQuestion} from "../../redux/actions/setting-questions";


const QuestionSchema = Yup.object().shape({
    questionNumber: Yup.string()
        .required('Required'),
    question: Yup.string()
        .min(10, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required'),
    firstAnswer: Yup.string()
        .max(50, 'Too Long!')
        .required('Required'),
    secondAnswer: Yup.string()
        .max(50, 'Too Long!')
        .required('Required'),
    thirdAnswer: Yup.string()
        .max(50, 'Too Long!')
        .required('Required'),
    fourthAnswer: Yup.string()
        .max(50, 'Too Long!')
        .required('Required'),
    rightAnswer: Yup.string()
        .required('Required')
});

//
type MapStatePropsType = {}
type MapDispatchPropsType = {
    addQuestion: (question: QuestionItem) => void
}
type OwnProps = {}
//

type AddingQuestionForm = MapStatePropsType & MapDispatchPropsType & OwnProps

const AddingQuestionForm: React.FC<AddingQuestionForm> = ({addQuestion}) => {

    const initialValues: QuestionItem = {
        id: 1,
        questionNumber: '',
        question: '',
        firstAnswer: '',
        secondAnswer: '',
        thirdAnswer: '',
        fourthAnswer: '',
        rightAnswer: ''
    }
    return (
        <div>
            <h1 className={classes.TextColorW}>Add new question</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={QuestionSchema}
                onSubmit={async (values,actions) => {
                    const question = {...values, id: Date.now()}
                    addQuestion(question)
                    actions.resetForm({
                        values: {
                            id: 1,
                            questionNumber: '',
                            question: '',
                            firstAnswer: '',
                            secondAnswer: '',
                            thirdAnswer: '',
                            fourthAnswer: '',
                            rightAnswer: ''
                        }
                    })
                }}
            >
                {({errors, touched,handleReset}) => (
                    <Form>
                        <label htmlFor="questionNumber">Question Number</label>
                        <Field id="questionNumber" name="questionNumber" as="select">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                        </Field>
                        {errors.questionNumber && touched.questionNumber ? (
                            <div className={classes.TextColorW}>{errors.questionNumber}</div>
                        ) : null}
                        <label htmlFor="question">Question</label>
                        <Field id="question" name="question"/>
                        {errors.question && touched.question ? (
                            <div className={classes.TextColorW}>{errors.question}</div>
                        ) : null}
                        <label htmlFor="firstAnswer">First answer</label>
                        <Field id="firstAnswer" name="firstAnswer"/>
                        {errors.firstAnswer && touched.firstAnswer ? <div className={classes.TextColorW}>{errors.firstAnswer}</div> : null}
                        <label htmlFor="secondAnswer">Second answer</label>
                        <Field id="secondAnswer" name="secondAnswer"/>
                        {errors.secondAnswer && touched.secondAnswer ? (
                            <div className={classes.TextColorW}>{errors.secondAnswer}</div>
                        ) : null}
                        <label htmlFor="thirdAnswer">Third answer</label>
                        <Field id="thirdAnswer" name="thirdAnswer"/>
                        {errors.thirdAnswer && touched.thirdAnswer ? (
                            <div className={classes.TextColorW}>{errors.thirdAnswer}</div>
                        ) : null}
                        <label htmlFor="fourthAnswer">Fourth answer</label>
                        <Field id="fourthAnswer" name="fourthAnswer"/>
                        {errors.fourthAnswer && touched.fourthAnswer ? <div className={classes.TextColorW}>{errors.fourthAnswer}</div> : null}
                        <label htmlFor="rightAnswer">Right answer</label>
                        <Field id="rightAnswer" name="rightAnswer" as="select">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </Field>
                        {errors.rightAnswer && touched.rightAnswer ? (
                            <div className={classes.TextColorW}>{errors.rightAnswer}</div>
                        ) : null}

                        <div className={classes.BtnForm}>
                            <button
                                className="btn btn-main" type="submit">Submit</button>
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
        addQuestion: question => dispatch(addQuestion(question))
    }
}



export default connect<MapStatePropsType,MapDispatchPropsType,OwnProps,AppStateType>(null,mapDispatchToProps)(AddingQuestionForm)