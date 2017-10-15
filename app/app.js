import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

import {StackNavigator} from 'react-navigation';
import IndexNavigator from './indexRoute';
import QuizScreen from './quizDetails/quizScreen';
import PlaygroundScreen from './playground';
import AnimationScreen from './playground/animation';

const RouteNavigator = StackNavigator({
  Index: {
    screen: IndexNavigator, //TabNavigatorScreen
    navigationOptions: {
      title: `Joanna't Math Class`,
    },
  },
  QuizDetails: {screen: QuizScreen},

  
  Playground: {screen: PlaygroundScreen},
  Animation: {screen: AnimationScreen}
});


class MainApp extends React.Component{
  render(){
      return <RouteNavigator />
  }
}
export default MainApp;