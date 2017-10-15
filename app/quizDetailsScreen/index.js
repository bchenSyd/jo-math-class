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
import { mathGen } from '../common/quizGen';

class QuizDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'start quiz',
  };

  genQuiz = () => {
    const { config: { curriculum, level, duration } } = this.props.navigation.state.params;
    if (curriculum === 0) { //math
      const quiz = mathGen();
      return [0, 1].map(i =>
        <View style={styles.half} key={`group_${i}`}>
          {quiz.slice(5 * i, 5 * (i + 1)).map((q, index) => <View style={styles.quizRow} key={`quiz_${index}`}>
            <Text style={[styles.quizText, { flex: 3 }]}>{q[0]}</Text>
            <Text style={styles.quizText}>+</Text>
            <Text style={[styles.quizText, { flex: 3 }]}>{q[1]}</Text>
            <Text style={styles.quizText}>=</Text>
          </View>)}
        </View>)
    } else {
      return <Text style={styles.quizText}>fix spelling mistakes</Text>
    }
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.title}>
          <Text style={styles.titleTxt}>Anwser the questions below</Text>
        </View>
        <View style={styles.content}>
          {this.genQuiz()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1, // if you delete this line, everything gets squashed into one line
    flexDirection: "column",
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',//veritical
    alignItems: 'center', //horizental
    backgroundColor: color.blue,
  },
  titleTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  content: {
    flex: 10,
    padding: fontSize.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  half: {
    flex: 1,
    padding: fontSize.small,
  },
  quizRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  quizText: {
    flex: 1,
    fontSize: 35,
    textAlign: 'center'  // why is this still required?????
  }
});


export default QuizDetailsScreen;
