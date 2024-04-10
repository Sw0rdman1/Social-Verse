import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import BottomTabNavigation from '../../components/navigation/BottomTabNavigation'
import { StackScreenProps } from '@react-navigation/stack'
import { BottomTabProvider } from '../../context/BottomBarContext'
import { useAppContext } from '../../context/AppContext'
import Colors from '../../../assets/constants/Colors'
import AddNewPostButton from '../../components/navigation/AddNewPostButton'

const MainScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {

    return (
        <BottomTabProvider>
            <View style={styles.container}>
                <AddNewPostButton />
                <BottomTabNavigation navigation={navigation} />
            </View>
        </BottomTabProvider>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.whiteBg
    }
})