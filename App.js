import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Counter from './Src/Screens/Counter';
import Deincrement from './Src/Screens/Deincrement';
import Increment from './Src/Screens/Increment';
import {Provider} from 'react-redux';
import store from './Src/Redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
        <Increment />
        <Deincrement />
      </Provider>
    );
  }
}
export default App;
