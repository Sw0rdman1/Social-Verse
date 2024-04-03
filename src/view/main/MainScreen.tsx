import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import BottomTabNavigation from '../../components/navigation/BottomTabNavigation'
import { StackScreenProps } from '@react-navigation/stack'
import { BottomTabProvider } from '../../context/BottomBarContext'
import { useApi } from '../../context/AppContext'

const MainScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {

    const { api } = useApi();

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await api.posts.getAllPosts(1, 10)
            console.log(data)
        }
        fetchPosts();
    }, [])

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