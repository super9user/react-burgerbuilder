import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/Home';
import Toolbar from './components/Toolbar';
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder';
import Attributions from './components/Attributions/Attributions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/burger-builder" component={BurgerBuilder} />
            <Route path="/attributions" component={Attributions} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
