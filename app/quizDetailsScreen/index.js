import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
} from 'react-native';
import { color, fontSize } from '../common/theme';


class QuizDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'start quiz',
  };

  render() {
    const { config:{ curriculum, level, duration} } = this.props.navigation.state.params;
    return (
      <View style={styles.main}>
        <View style={styles.title}>
          <Text style={styles.titleTxt}>Anwser the questions below</Text>
        </View>
        <View style={styles.content}>
          <Text>{ `${curriculum} - ${level} - ${duration}`}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1, // if you delete this line, everything gets squashed into one line
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.blue,
  },
  titleTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  content: {
    padding:fontSize.small,
    flex: 10,
  }
});


export default QuizDetailsScreen;
