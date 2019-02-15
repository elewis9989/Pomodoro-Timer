import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Constants } from 'expo'

import Header from './Header.js'
import Timer from './Timer.js'
import StartButton from './StartButton.js';

export default class Homescreen extends React.Component{
    render(){
        return(
           <View style={styles.container}>
                <Header />
                <Timer />
                <StartButton />
           </View> 
        )
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            flexDirection:'column',
            paddingTop: Constants.statusBarHeight,

        }
    }
)