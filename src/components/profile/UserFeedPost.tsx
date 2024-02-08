import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated'
import Colors from '../../../assets/constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Post } from '../../models/Post';


const { width } = Dimensions.get('window');


interface UserFeedPostProps {
    post: Post;
    openPostHandler: (post: any) => void;
    isGrid: boolean;
    index: number;
}

const UserFeedPost: React.FC<UserFeedPostProps> = ({ post, index, isGrid, openPostHandler }) => {
    return (
        <View key={post.id} style={[styles.postContainer, (!isGrid || index % 3 === 0) && styles.fullWidthPost]}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => openPostHandler(post)} style={styles.image}>
                <Animated.Image
                    sharedTransitionTag={post.id + ".image"}
                    source={{ uri: post.contentPhoto }}
                    style={styles.image}

                />
                <View style={styles.interactionContainer}>
                    <AntDesign name="heart" size={20} color={Colors.whiteBg} />
                    <Text style={styles.interactionText}>{post.numberOfLikes}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default UserFeedPost

const styles = StyleSheet.create({
    postContainer: {
        width: '49%',
        height: width * 0.6,
        marginBottom: 5,
    },
    fullWidthPost: {
        width: '100%',
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },

    interactionContainer: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: "100%",
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,

    },
    interactionText: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: 'bold'
    }
})