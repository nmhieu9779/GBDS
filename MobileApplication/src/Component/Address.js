import React, { Component } from "react"
import { Platform, StyleSheet, Text, ScrollView } from "react-native"
import { SafeAreaView } from "react-navigation"

class Address extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount = () => {

    }

    render() {
        return (
            <SafeAreaView style={styles.container}>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Address

