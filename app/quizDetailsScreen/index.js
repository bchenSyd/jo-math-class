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

  render() {
    const { config: { curriculum, level, duration } } = this.props.navigation.state.params;
    const quiz = mathGen()
    return (
      <View style={styles.main}>
        <View style={styles.title}>
          <Text style={styles.titleTxt}>Anwser the questions below</Text>
        </View>
        <View style={styles.content}>
          {
            [0, 1].map(i =>
              <View style={styles.half} key={`group_${i}`}>
                {quiz.slice(5 * i, 5 * (i + 1)).map((q, index) => <View style={styles.quizRow} key={`quiz_${index}`}>
                  <Text style={styles.quizText}>{q[0]}</Text>
                  <Text style={styles.quizText}>+</Text>
                  <Text style={styles.quizText}>{q[1]}</Text>
                  <Text style={styles.quizText}>=</Text>
                </View>)}
              </View>
            )
          }
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1, // if you delete this line, everything gets squashed into one line
    flexDirection:"column",
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    flexDirection:'column',
    justifyContent:'center',//veritical
    alignItems:'center', //horizental
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
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quizText: {
    flex:1,
    fontSize: 35,
    marginBottom: 30,
    textAlign:'center'  // why is this still required?????
  }
});


export default QuizDetailsScreen;
