import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { User } from '../../models/User';
import Colors from '../../../assets/constants/Colors';

interface FollowerSectionProps {
    user: User;
}

const FollowerSection: React.FC<FollowerSectionProps> = ({ user }) => {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.label}>Followers</Text>
                <Text style={styles.count}>{user.numberOfFollowers}</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.label}>Following</Text>
                <Text style={styles.count}>{user.numberOfFollowing}</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.label}>Posts</Text>
                <Text style={styles.count}>{user.numberOfPosts}</Text>
            </View>
        </View>
    )
}

export default FollowerSection

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: 22,
        gap: 25,
        marginTop: 30,
    },
    item: {
        paddingVertical: 20,
        flex: 1,
        backgroundColor: Colors.grayTransparent,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        borderRadius: 10,
    },
    label: {
        fontSize: 16,
    },
    count: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})