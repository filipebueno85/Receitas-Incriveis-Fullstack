import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import './App.css';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeInProgress from './components/RecipeInProgress';
import Provider from './context/myProvider';
import DoneRecipes from './pages/DoneRecipes';
import Drink from './pages/Drink';
import Drinks from './pages/Drinks';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Login from './pages/Login';
import Meals from './pages/Meals';
import Profile from './pages/Profile';
import Recipe from './pages/Recipe';

function App() {
  return (
    <Provider>
      <div>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/meals/:iddareceita/in-progress" component={ RecipeInProgress } />
          <Route path="/drinks/:iddareceita/in-progress" component={ RecipeInProgress } />
          <Route path="/drinks/:iddareceita" component={ Drink } />
          <Route path="/meals/:iddareceita" component={ Recipe } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/done-recipes" component={ DoneRecipes } />
          <Route exact path="/meals" component={ Meals } />
          <Route exact path="/drinks" component={ Drinks } />
          <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
          {/* render={ (props) => (<Login
            { ...props }
            git={ { gitData, setGitData } } */}
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
