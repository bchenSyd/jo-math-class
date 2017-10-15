import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { color, fontSize } from '../../common/theme';

import QuizHistoryScreen from '../components/quizHistoryScreen';


class QuizHistoryContainer extends Component {
    static navigationOptions = {
        tabBarLabel: 'My Quiz',
    }
    componentDidMount() {
        // todo: fetch quiz history;
    }
    render() {
        const { navigation: { navigate }, isFetching, carOfTheWeek } = this.props;
        const review = carOfTheWeek ? carOfTheWeek.review : '';
        return <View style={styles.main}>
            <QuizHistoryScreen style={styles.content}
                isFetching={isFetching}
                carOfTheWeek={carOfTheWeek} />

            <View>
                {/* you are not able to change the height of a default Android Button */}
                <Button title='goto Playground'
                    onPress={e => navigate('Playground')}
                />
                {/* if you want to change it, use a TouchableOpacity instead */}
                <TouchableOpacity style={styles.touchable} onPress={e => navigate('Animation')}>
                    <Text style={styles.touchableText} >goto Animation</Text>
                </TouchableOpacity>
            </View>
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
    },
    touchable: {
        backgroundColor: color.blue,
        marginTop: 10,
        alignItems: 'center',
    },
    touchableText: {
        color: 'white',
        fontSize: fontSize.default,
        fontWeight: '500',
        padding: fontSize.large,
    },
});


export default QuizHistoryContainer;
