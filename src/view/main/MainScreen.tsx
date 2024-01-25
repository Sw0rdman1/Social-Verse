import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BottomTabNavigation from '../../components/navigation/BottomTabNavigation'
import { StackScreenProps } from '@react-navigation/stack'
import { BottomTabProvider } from '../../context/BottomBarContext'

const MainScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {

    return (
        <BottomTabProvider>
            <View style={styles.container}>
                <BottomTabNavigation navigation={navigation} />
            </View>
        </BottomTabProvider>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})