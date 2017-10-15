import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchScreen from '../components/searchScreen';
import Splash from 'react-native-smart-splash-screen';

class NewQuizContainer extends Component {
    static navigationOptions  = {
        tabBarLabel: 'Start a new Quiz',
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
        super()
        this.state = {
            curriculumList: [{
                id: -1,
                name: 'Please select a curriculum',
            },
            {
                id: 0,
                name: 'Math',
            },
            {
                id: 1,
                name: 'English',
            }],
            selectedCurriculum: -1,
            levelList: [{
                id: -1,
                name: 'Select a curriculum first',
            },
            ],
            selectedLevel: -1,

            startQuizEnabled: false,
        }
    }

    go2CarDetails = selectedModel => {
        const { navigate } = this.props.navigation;
        navigate('CarDetails', { modelId: selectedModel });
    }

    onSelectionChange = (type, newVal) => {
        if (type === 'curriculum') { // change curriculum
            const curriculumId = newVal;
            if (curriculumId === -1) {
                // user de-select curriculum;
                this.setState({
                    selectedcu: curriculumId,
                    levelList: [{
                        id: -1,
                        name: 'Select a curriculum first',
                    }],
                    startQuizEnabled: false,
                });
            } else {
                this.setState({
                    selectedCurriculum: curriculumId,
                    levelList: [
                        {
                            id: -1,
                            name: 'Please select a level',
                        }, {
                            id: 0,
                            name: 'easy',
                        },
                        {
                            id: 1,
                            name: 'medium',
                        },
                        {
                            id: 2,
                            name: 'mixed',
                        }],
                    startQuizEnabled: false,
                });
            }
        } else { //change level
            const levelId = newVal;
            this.setState({
                selectedLevel: levelId,
                startQuizEnabled: levelId !== -1,
            })
        }
    }

    render() {
        const { curriculumList, levelList, selectedCurriculum, selectedLevel } = this.state;
        return <SearchScreen makeList={makeList}
            modelList={modelList}
            selectedMake={selectedMake}
            selectedModel={selectedModel}
            onSelectionChange={this.onSelectionChange}
            searchButtonEnabled={searchButtonEnabled}
            go2CarDetails={this.go2CarDetails} />
    }
}

export default NewQuizContainer;