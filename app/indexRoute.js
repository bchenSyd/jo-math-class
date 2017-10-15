import { TabNavigator } from "react-navigation";

import NewQuizContainer from './newQuizScreen';
import QuizResultsContainer from './quizResultsScreen';

const IndexNavigator = TabNavigator({
    NewQuiz: { screen: NewQuizContainer },
    QuizResults: { screen: QuizResultsContainer },
});

export default IndexNavigator;
