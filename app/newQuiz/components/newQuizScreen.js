import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    Picker,
    PixelRatio,
    StyleSheet,
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
        const { curriculumList, levelList, selectedCurriculum, selectedLevel, startQuizEnabled } = this.props;
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

            <Button
                disabled={!startQuizEnabled}
                onPress={this.onStartQuicClicked}
                title="Start a Quiz"
            />

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
        alignItems: 'stretch',
        marginBottom: 2,
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
});

export default SearchScreen;
