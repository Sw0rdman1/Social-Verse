import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../../../assets/constants/Colors';
import { Post } from '../../../models/Post';


const ICON_SIZE = 22;


interface InteractionSectionProps {
    post: Post;
}

const InteractionSection: React.FC<InteractionSectionProps> = ({ post }) => {

    const [isLiked, setIsLiked] = useState(post.liked);
    const [isBookmarked, setIsBookmarked] = useState(post.bookmarked);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    setIsLiked(!isLiked);
                    post.numberOfLikes += isLiked ? -1 : 1;
                }}
                style={[styles.interactionContainer,
                {
                    backgroundColor: isLiked ? Colors.likeColorTransparent : "whitesmoke",
                }]}
            >
                <Text style={styles.interactionText}>{post.numberOfLikes}</Text>
                {isLiked ?
                    <AntDesign name="heart" size={ICON_SIZE} color={Colors.likeColor} /> :
                    <AntDesign name="hearto" size={ICON_SIZE} color={Colors.black} />
                }
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    setIsBookmarked(!isBookmarked);
                    post.numberOfBookmarks += isBookmarked ? -1 : 1;

                }}
                style={[styles.interactionContainer,
                {
                    backgroundColor: isBookmarked ? Colors.gradient2Transparent : "whitesmoke",
                }]}
            >
                <Text style={styles.interactionText}>{post.numberOfBookmarks}</Text>

                {isBookmarked ?
                    <FontAwesome name="bookmark" size={ICON_SIZE} color={Colors.gradient2} /> :
                    <FontAwesome name="bookmark-o" size={ICON_SIZE} color="black" />
                }
            </TouchableOpacity>
        </View >
    )
}

export default InteractionSection

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        gap: 5,
        borderWidth: 1,
        borderColor: Colors.whiteBg,
        paddingHorizontal: 10,
        height: 50,
    },
    interactionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 10,
        borderRadius: 10,
    },
    interactionText: {
        marginRight: 10,
        fontSize: 20,
        fontWeight: '600',
    },

})

