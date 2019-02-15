import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Timer extends React.Component{
    constructor(){
        super()
        this.state = {
            counter: ""
        }
    }
    
    setTime = () => {
        var time = new Date()
        time.setHours(0,25,0,0);
        console.log(time.toTimeString().split(' ')[0])
        
        this.setState({
            counter: time.toTimeString().split(' ')[0]
        })
    }

    componentDidMount(){
        this.setTime()
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.counterText}>{this.state.counter}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },

    counterText: {
        fontSize: 50,
    }
})