import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserProfileScreen = ({ route, navigation }: any) => {
    const { user } = route.params;

    return (
        <View>
            <Text>UserProfileScreen</Text>
        </View>
    )
}

export default UserProfileScreen

const styles = StyleSheet.create({})