import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    StyleSheet,
} from 'react-native';
import { color, fontSize } from '../../common/theme';

import QuizResultsScreen from '../components/quizResultsScreen';


class QuizResultsContainer extends Component {
    static navigationOptions = {
        tabBarLabel: 'Quiz Results',
    }
    componentDidMount() {
        // todo: fetch quiz history;
    }
    render() {
        const { isFetching } = this.props;
        return <View style={styles.main}>
            <QuizResultsScreen style={styles.content}
                isFetching={isFetching} />
        </View>;
    }
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1, // manditory, equivalent of set Height: 100%
    },
    content: {
        marginBottom: 20,
        flex: 1,
        alignItems: 'flex-start',
    }
});


export default QuizResultsContainer;
