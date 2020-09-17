import React from "react"
import './records.css'
import {ActionPlayerRecord} from "../../types/actions-types/records-actions";
import {NavLink} from "react-router-dom";

type Records = {
    records: Array<ActionPlayerRecord>
}

const Records:React.FC<Records> = ({records}) => (
    <div className="records-bg">
        <NavLink to="/" className="btn-large btn-main">Back to menu</NavLink>
        <div className="records-main">
            <table>
                <tr><th className="records-th">Player name</th><th className="records-th">Player score</th><th className="records-th">Player streak</th></tr>
                {records.map(i=><tr key={i.id}>
                    <td className="records-td">{i.playerName}</td>
                    <td className="records-td">{i.playerRecord}</td>
                    <td className="records-td">{i.playerStreak}</td>
                </tr>)}
            </table>
        </div>
    </div>
)

export default Records
