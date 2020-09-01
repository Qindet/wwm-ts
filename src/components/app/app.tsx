import React from "react";
import Menu from "../menu";
import {Route,Switch} from 'react-router-dom'
import SettingQuestionsPage from "../pages/setting-questions-page";


const App = () => {

    return <div>
        <Switch>
            <Route path='/' component={Menu} exact/>
            <Route path='/set-questions' component={SettingQuestionsPage} exact/>
        </Switch>
    </div>
}

export default App