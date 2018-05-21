import React from "react";
import { Provider } from "react-redux";
import { HashRouter, Switch } from "react-router-dom";
import configureStore from "../../store";
import AppContainer from "../AppContainer/AppContainer";

const store = configureStore();

export default () => (
    <Provider store={store}>
      <div>
        <HashRouter>
          <Switch>
            <AppContainer />
          </Switch>
        </HashRouter>
      </div>
  </Provider>
)