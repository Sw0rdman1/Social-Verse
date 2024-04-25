import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { User } from '../../models/User';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';
import usePosts from '../../hooks/usePosts';
import { Post } from '../../models/Post';
import moment from 'moment';
import UserFeedPost from './UserFeedPost';
import { useTheme } from '../../context/ThemeContext';
import Text from '../ui/Text';



const NotFollowingFeed = ({ displayName }: { displayName: string }) => {
    const { theme } = useTheme();

    return (
        <Animated.View
            entering={FadeInDown.delay(500).duration(500)}
            style={styles.notFollowingContainer}>
            <View style={styles.notFollowingContainer}>
                <Ionicons name="lock-closed" size={28} color={theme.gray} />
                <Text style={[styles.NotFollowingText, { color: theme.gray }]}>
                    This user is private. Follow to see {displayName} posts
                </Text>
            </View>
        </Animated.View>
    )
}

interface UserFeedProps {
    user: User;
    isFollowing: boolean;
    openPost: (post: Post) => void;
}

const UserFeed: React.FC<UserFeedProps> = ({ user, isFollowing, openPost }) => {
    const posts = usePosts(user);
    const { theme } = useTheme();
    const [isGrid, setIsGrid] = useState(true);

    const openPostHandler = (post: Post) => {
        if (post.createdAt instanceof Date) {
            const date = moment(post.createdAt).fromNow();
        }
        openPost(post);
    }

    if (!isFollowing) {
        return <NotFollowingFeed displayName={user.displayName} />
    }



    return (
        <Animated.View
            entering={FadeInDown.delay(500).duration(500)}
            style={[styles.container, { backgroundColor: theme.backgroundColor }]}
        >
            <View style={styles.postsContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        Posts
                    </Text>
                    <View style={styles.viewOptions}>
                        <TouchableOpacity onPress={() => setIsGrid(true)}>
                            <Ionicons
                                name={isGrid ? 'grid' : 'grid-outline'}
                                size={24}
                                color={isGrid ? theme.primaryColor : theme.gray}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIsGrid(false)}>
                            <Ionicons
                                name={isGrid ? 'list-outline' : 'list'}
                                size={28}
                                color={isGrid ? theme.gray : theme.primaryColor}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                {posts.map((post, index) => (
                    <UserFeedPost key={post.id} post={post} index={index} isGrid={isGrid} openPostHandler={openPostHandler} />
                ))}
            </View>
        </Animated.View>
    )

}

export default UserFeed

const styles = StyleSheet.create({
    notFollowingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: "80%",
        gap: 5,
    },
    NotFollowingText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        paddingBottom: 50,
    },
    titleContainer: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 5,
        marginBottom: 25,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    postsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        gap: 5,
    },
    viewOptions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 10,
    },

})