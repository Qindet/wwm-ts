import React from "react";
import {Route,Switch} from 'react-router-dom'
import SettingQuestionsPage from "../pages/setting-questions-page";
import MenuContainer from "../../containers/menu-container/menu-container";
import NewGamePage from "../pages/new-game-page";
import GamePage from "../pages/game-page";


const App = () => {

    return <div>
        <Switch>
            <Route path='/' component={MenuContainer} exact/>
            <Route path='/set-questions' component={SettingQuestionsPage} />
            <Route path='/new-game' component={NewGamePage} exact/>
            <Route path='/new-game/:id' component={GamePage} />
        </Switch>
    </div>
}

export default App