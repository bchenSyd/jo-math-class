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
                duration: 300,
                delay: 200,
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
            selectedCurriculum: -1,
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
            selectedLevel: -1,

            startQuizEnabled: false,
        };
    }

    startAQuiz = () => {
        const { navigate } = this.props.navigation;
        const { selectedCurriculum, selectedLevel } = this.state;
        navigate('QuizDetails', {
            config: {
                curriculum: selectedCurriculum,
                level: selectedLevel
            }
        });
    }

    onSelectionChange = (type, newVal) => {
        if (type === 'curriculum') { // change curriculum
            const curriculumId = newVal;
            this.setState({
                selectedCurriculum: curriculumId,
                selectedLevel: 0, //mixed by defult;
            });
        } else { // change level
            const levelId = newVal;
            this.setState({
                selectedLevel: levelId,
            });
        }
    }

    render() {
        const { curriculumList, levelList, selectedCurriculum, selectedLevel, startQuizEnabled } = this.state;
        return <NewQuizScreen curriculumList={curriculumList}
            levelList={levelList}
            selectedCurriculum={selectedCurriculum}
            selectedLevel={selectedLevel}
            onSelectionChange={this.onSelectionChange}
            startAQuiz={this.startAQuiz} />;
    }
}

export default NewQuizContainer;
