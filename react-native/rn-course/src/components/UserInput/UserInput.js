import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default class UserInput extends React.Component {
    render() {
        const props = this.props;

        return (
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.placeInput} 
                    placeholder="An awesome place" 
                    value={props.placeName} 
                    onChangeText={props.placeNameChangedHandler} 
                />
                <Button 
                    styles={styles.placeButton} 
                    title="Add" 
                    onPress={props.placeSubmitHandler} 
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});
