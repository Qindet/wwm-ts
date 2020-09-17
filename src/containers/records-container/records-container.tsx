import React, {Dispatch, useEffect} from "react"
import {ActionPlayerRecord} from "../../types/actions-types/records-actions"
import {AppStateType} from "../../redux/reducers"
import { getRecordsLoading, getRecordsSelector} from "../../selectors/game-selectors"
import {getRecords} from "../../redux/actions/records-actions"
import {connect} from 'react-redux'
import Records from "../../components/records";

//
type MapStatePropsType = {
    records: Array<ActionPlayerRecord>
    loading: boolean
}
type MapDispatchPropsType = {
    getRecords: () => void
}
type OwnProps = {}
type RecordsContainer = MapStatePropsType & MapDispatchPropsType & OwnProps
//

const RecordsContainer: React.FC<RecordsContainer> = ({getRecords,loading,records}) => {
    useEffect(() => {
        getRecords()
    },[])
    if (loading) {
        return <div>Loading...</div>
    }
    return <Records records={records}/>
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        records: getRecordsSelector(state),
        loading: getRecordsLoading(state)
    }
}


const mapDispatchToProps = (dispatch: Dispatch<any>): MapDispatchPropsType => {
    return {
        getRecords: () => dispatch(getRecords())
    }
}


export default connect<MapStatePropsType,MapDispatchPropsType,OwnProps,AppStateType>(mapStateToProps,mapDispatchToProps)(RecordsContainer)