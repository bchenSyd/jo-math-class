import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    PixelRatio,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import ItemPicker from '../../common/itemPicker';
import { color, fontSize } from '../../common/theme';


class SearchScreen extends Component {
    _onSelectionChange = type => (newVal) => {
        const { onSelectionChange } = this.props;
        onSelectionChange(type, newVal);
    }

    onStartQuicClicked = e => {
        this.props.startAQuiz();
    }
    render() {
        const { curriculumList, levelList, selectedCurriculum, selectedLevel } = this.props;
        return <View style={styles.base}>
            <View style={styles.content}>
                <ItemPicker itemLabel='Curriculum' selectedValue={selectedCurriculum}
                    onSelectionChange={this._onSelectionChange('curriculum')}
                    options={curriculumList} />
                <ItemPicker itemLabel='Level'
                    selectedValue={selectedLevel}
                    onSelectionChange={this._onSelectionChange('level')}
                    options={levelList} />
            </View>

            <TouchableOpacity style={styles.touchable} onPress={this.onStartQuicClicked}>
                <Text style={styles.touchableText} >Start a New Quiz</Text>
            </TouchableOpacity>

        </View>;
    }
}

const styles = StyleSheet.create({
    base: {
        backgroundColor: 'transparent',
        borderBottomColor: color.gray20,
        borderBottomWidth: 1 / PixelRatio.get(),
        justifyContent: 'space-between',
        flexDirection: 'column',
        flex: 1, // same as 100%
        alignItems: 'stretch'
    },
    content: {
        padding: fontSize.large,
        justifyContent: 'center',
    },
    searchItem: {
        height: 30,
        justifyContent: 'center',
        fontSize: fontSize.default,
    },
    searchOptions: {
        width: 120,
        marginLeft: 10,
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
    }
});

export default SearchScreen;
