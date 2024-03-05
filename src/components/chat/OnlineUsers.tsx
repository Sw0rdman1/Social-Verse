import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../assets/constants/Colors'
import { getOnlineUsers } from '../../models/User';

const OnlineUsers = () => {
    const onlineUsers = getOnlineUsers();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your friends</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {onlineUsers.map((user, index) => (
                    <View key={index} style={styles.avatarContainer}>
                        <View>
                            <Image source={{ uri: user.profilePicture }} style={styles.avatar} />
                            <View style={styles.onlineIndicator} />
                        </View>
                        <Text style={styles.username}>{user.displayName}</Text>
                    </View>

                ))}
            </ScrollView>
        </View>
    )
}

export default OnlineUsers

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        display: "flex",
        flexDirection: "column",
    },
    title: {
        paddingHorizontal: 20,
        fontSize: 16,
        fontWeight: "600",
        color: Colors.whiteBg,
    },
    avatarContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 30,
        position: "relative",

        borderWidth: 1,
        borderColor: Colors.grayTransparentLess,
    },
    username: {
        marginTop: 10,
        fontSize: 12,
        color: Colors.whiteBg,
    },
    onlineIndicator: {
        width: 15,
        height: 15,
        borderRadius: 15,
        backgroundColor: Colors.success,
        position: "absolute",
        bottom: 0,
        right: 0,
        borderWidth: 1,
        borderColor: Colors.grayTransparent
    },

})