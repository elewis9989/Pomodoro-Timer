import React from 'react'
import { View, Text, StyleSheet } from 'react-native'



export default class Header extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.timerText}>Pomodoro!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center'
    },

    timerText: {
        fontSize: 30,
        marginTop: 20
    }
})