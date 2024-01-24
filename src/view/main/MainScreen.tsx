import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomTabNavigation from '../../components/navigation/BottomTabNavigation'

const MainScreen = () => {
    return (
        <View style={styles.container}>
            <BottomTabNavigation />
        </View>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})