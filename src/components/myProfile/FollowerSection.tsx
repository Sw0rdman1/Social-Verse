import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../../assets/constants/Colors'
import React from 'react'
import { User } from '../../models/User'

interface FollowerSectionProps {
    user: User
}

const FollowerSection: React.FC<FollowerSectionProps> = ({ user }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.item]}>
                <Text style={styles.count}>{user.numberOfPosts}</Text>
                <Text style={styles.label}>Posts</Text>
            </View>
            <View style={[styles.item]}>
                <Text style={styles.count}>{user.numberOfFollowers}</Text>
                <Text style={styles.label}>Followers</Text>
            </View>
            <View style={[styles.item]}>
                <Text style={styles.count}>{user.numberOfFollowing}</Text>
                <Text style={styles.label}>Following</Text>
            </View>
        </View>
    )
}

export default FollowerSection

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 25,
        gap: 5,
        borderBottomRightRadius: 25,
        backgroundColor: Colors.gradient2,
    },
    item: {
        paddingVertical: 15,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        borderRadius: 15,
    },
    label: {
        fontSize: 15,
        color: Colors.whiteBg,
    },
    count: {
        fontSize: 20,
        color: Colors.whiteBg,
        fontWeight: 'bold',
    },
})