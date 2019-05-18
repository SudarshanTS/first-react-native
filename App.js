import React from 'react';
import MyRoute from "./src/navigation";
import { Provider } from 'react-redux';
import createStore from './src/configureStore';
const store = createStore();

export default class App extends React.Component {


  render() {
    return (
      <Provider store={store}>
        <MyRoute />
      </Provider>
    );
  }
}

