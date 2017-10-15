import React from 'react';
import { TabNavigator } from "react-navigation";

import NewQuizContainer from './newQuiz';
import QuizHistoryContainer from './quizHistory';

const IndexNavigator = TabNavigator({
    NewQuiz: { screen: NewQuizContainer },
    QuizHistory: { screen: QuizHistoryContainer },
});

export default IndexNavigator;