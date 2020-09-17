import React from "react";
import {Route,Switch} from 'react-router-dom'
import SettingQuestionsPage from "../pages/setting-questions-page";
import MenuContainer from "../../containers/menu-container/menu-container";
import NewGamePage from "../pages/new-game-page";
import GamePage from "../pages/game-page";
import FinalScorePage from "../pages/final-score-page";
import Records from "../../containers/records-container";

const App = () => {

    return <div>
        <Switch>
            <Route path='/' component={MenuContainer} exact/>
            <Route path='/set-questions' component={SettingQuestionsPage} />
            <Route path='/new-game' component={NewGamePage} exact/>
            <Route path='/new-game/:id' render={() => <GamePage />} />
            <Route path='/final-score' component={FinalScorePage} />
            <Route path='/records' component={Records} />
        </Switch>
    </div>
}

export default App