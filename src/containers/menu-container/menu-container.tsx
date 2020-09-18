import React, {useEffect} from "react";
import {connect} from "react-redux";
import Menu from "../../components/menu";
import {getQuestions} from "../../redux/actions/setting-questions";
import {AppStateType} from "../../redux/reducers";


//
type MapStatePropsType = {}
type MapDispatchPropsType = {
    getQuestions: () => void
}
type OwnProps = {}
//

type MenuContainer = MapStatePropsType & MapDispatchPropsType & OwnProps

const MenuContainer: React.FC<MenuContainer> = ({getQuestions}) => {

    useEffect(() => {
        getQuestions()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return <Menu />
}

const mapDispatchToProps = (dispatch: React.Dispatch<any>): MapDispatchPropsType => {
    return {
        getQuestions: () => dispatch(getQuestions())
    }
}

export default connect<MapStatePropsType,MapDispatchPropsType,OwnProps,AppStateType>(null,mapDispatchToProps)(MenuContainer)