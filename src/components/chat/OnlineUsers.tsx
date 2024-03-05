import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../assets/constants/Colors'
import { getOnlineUsers } from '../../models/User';

const OnlineUsers = () => {
    const onlineUsers = getOnlineUsers();

    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: "row",
                paddingHorizontal: 20,
            }}>
                <Text style={styles.title}>Friend</Text>
                <Text style={[styles.title, { fontWeight: "400", marginLeft: 3 }]}>List</Text>
            </View>
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
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 20,
    },
    title: {
        fontSize: 21,
        fontWeight: "600",
        color: Colors.whiteBg,
    },
    avatarContainer: {
        height: 120,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 90,
        marginHorizontal: 5,
        gap: 10,
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 40,
        position: "relative",
        borderWidth: 1,
        borderColor: Colors.grayTransparentLess,
    },
    username: {
        textAlign: "center",
        fontSize: 12,
        fontWeight: "500",
        color: Colors.whiteBg,
    },
    onlineIndicator: {
        width: 15,
        height: 15,
        borderRadius: 15,
        backgroundColor: Colors.success,
        position: "absolute",
        bottom: 2,
        right: 2,
        borderWidth: 1,
        borderColor: Colors.whiteSmoke
    },

})