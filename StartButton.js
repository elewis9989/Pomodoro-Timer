import React from 'react'
import { View, Button, Alert, StyleSheet, Text } from 'react-native'

export default class StartButton extends React.Component {

    start = () => {
        Alert.alert('You tapped the button!');
    }
    render() {
        return(
            <View style={styles.container}>
                <Button onPress={this.start} title="Go!" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center'
    }  
    
})