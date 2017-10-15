import { TabNavigator } from "react-navigation";

import NewQuizContainer from './newQuizScreen';
import QuizHistoryContainer from './quizHistoryScreen';

const IndexNavigator = TabNavigator({
    NewQuiz: { screen: NewQuizContainer },
    QuizHistory: { screen: QuizHistoryContainer },
});

export default IndexNavigator;
