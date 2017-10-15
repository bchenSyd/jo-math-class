import React, { Component } from 'react';
import NewQuizScreen from '../components/newQuizScreen';
import Splash from 'react-native-smart-splash-screen';

class NewQuizContainer extends Component {
    static navigationOptions = {
        tabBarLabel: 'Start a Quiz',
    }
    componentDidMount() {
        if (Splash) {
            Splash.close({
                animationType: Splash.animationType.fade,
                duration: 1500,
                delay: 3000,
            });
        }
    }

    constructor() {
        super();
        this.state = {
            curriculumList: [{
                id: 0,
                name: 'Math',
            },
            {
                id: 1,
                name: 'English',
            }],
            selectedCurriculum: 0,
            levelList: [{
                id: 0,
                name: 'mixed',
            },
            {
                id: 1,
                name: 'easy',
            },
            {
                id: 2,
                name: 'medium',
            },
            {
                id: 3,
                name: 'difficult',
            }],
            selectedLevel: 0,
            durationList: [{
                id: 0,
                name: '10 minutes',
            },
            {
                id: 1,
                name: '15 minutes',
            },
            {
                id: 2,
                name: '20 minutes',
            },
            {
                id: 3,
                name: '30 minutes',
            }],
            selectedDuration: 0,
        };
    }

    startNewQuiz = () => {
        const { navigate } = this.props.navigation;
        const { selectedCurriculum, selectedLevel ,selectedDuration} = this.state;
        navigate('QuizDetails', {
            config: {
                curriculum: selectedCurriculum,
                level: selectedLevel,
                duration: selectedDuration,
            }
        });
    }

    onSelectionChange = (fieldName, fieldValue) => {
        const newState = { ...this.state };
        newState[fieldName] = fieldValue;
        this.setState(newState);
    }

    render() {
        const { curriculumList, levelList, durationList, selectedCurriculum, selectedLevel, selectedDuration } = this.state;
        return <NewQuizScreen curriculumList={curriculumList}
            levelList={levelList}
            durationList={durationList}
            selectedCurriculum={selectedCurriculum}
            selectedLevel={selectedLevel}
            selectedDuration={selectedDuration}
            onSelectionChange={this.onSelectionChange}
            onStartQuizClicked={this.startNewQuiz} />;
    }
}

export default NewQuizContainer;
