import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../../assets/constants/Colors'
import { User } from '../../models/User'
import Animated, { FadeInDown, FadeInRight, FadeInUp, FadeOutRight } from 'react-native-reanimated'

interface FollowButtonProps {
    isFollowing: boolean;
    setIsFollowing: (value: boolean) => void;
    user: User;
}

const FollowButton: React.FC<FollowButtonProps> = ({ isFollowing, setIsFollowing, user }) => {

    const handleFollow = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity
                style={[styles.button, !isFollowing ? styles.followingButton : styles.notFollowingButton]}
                onPress={handleFollow}
            >
                <Ionicons name={isFollowing ? 'checkmark' : 'add'} size={26} color={!isFollowing ? Colors.whiteBg : Colors.gradient2} />
                <Text
                    style={[styles.buttonText, { color: !isFollowing ? Colors.white : Colors.gradient2 }]}
                >
                    {isFollowing ? 'Following' : 'Follow'}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const WriteMessageButton = () => {
    return (
        <Animated.View
            entering={FadeInRight.duration(300)}
            exiting={FadeOutRight.duration(300)}
            style={{ flex: 1 }}>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: Colors.gradient2, borderColor: Colors.gradient2 }]}
            >
                <Ionicons name='chatbubble-ellipses' size={24} color={Colors.white} />
                <Text
                    style={[styles.buttonText, { color: Colors.white }]}
                >
                    Message
                </Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

interface UserButtonsProps {
    user: User;
    isFollowing: boolean;
    setIsFollowing: (value: boolean) => void;
}

const UserButtons: React.FC<UserButtonsProps> = ({ user, isFollowing, setIsFollowing }) => {


    return (
        <Animated.View
            entering={FadeInDown.delay(800).duration(500)}
            style={styles.container}>
            <FollowButton isFollowing={isFollowing} setIsFollowing={setIsFollowing} user={user} />
            {isFollowing && <WriteMessageButton />}
        </Animated.View>
    )
}


export default UserButtons

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 15,
        gap: 15,
        height: 50,
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        backgroundColor: 'white',
        borderWidth: 1,
    },
    followingButton: {
        backgroundColor: Colors.gray,
        borderColor: Colors.gray,
    },
    notFollowingButton: {
        backgroundColor: Colors.whiteBg,
        borderColor: Colors.gradient2,

    },
    buttonText: {
        marginLeft: 5,
        color: Colors.gradient2,
        fontSize: 18,
        fontWeight: 'bold',
    },
})