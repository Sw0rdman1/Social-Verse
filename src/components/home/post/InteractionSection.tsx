import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../../../assets/constants/Colors';
import { Post } from '../../../models/Post';


const ICON_SIZE = 22;


interface InteractionSectionProps {
    post: Post;
    setCommentsDisplayed: (value: boolean) => void;
    commentsDisplayed: boolean;
}

const InteractionSection: React.FC<InteractionSectionProps> = ({ post, setCommentsDisplayed, commentsDisplayed }) => {

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
                    setCommentsDisplayed(!commentsDisplayed);
                }}
                style={[styles.interactionContainer,
                {
                    height: commentsDisplayed ? 55 : 45,
                    paddingTop: commentsDisplayed ? 0 : 10,
                    borderBottomLeftRadius: commentsDisplayed ? 0 : 10,
                    borderBottomRightRadius: commentsDisplayed ? 0 : 10,
                    backgroundColor: commentsDisplayed ? Colors.grayTransparent : "whitesmoke",
                }]}
            >
                {!commentsDisplayed && <Text style={styles.interactionText}>{post.numberOfComments}</Text>}
                {commentsDisplayed ?
                    <AntDesign name="close" size={ICON_SIZE} color={Colors.black} /> :
                    <FontAwesome name="comments" size={ICON_SIZE} color={Colors.black} />
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
                    <FontAwesome name="bookmark-o" size={ICON_SIZE} color={Colors.black} />
                }
            </TouchableOpacity>
        </View >
    )
}

export default InteractionSection

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        gap: 5,
        borderColor: Colors.whiteBg,
        paddingHorizontal: 10,
        height: 60,
        marginTop: 10,
        paddingTop: 5,
    },
    interactionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 10,
        borderRadius: 10,
        height: 45,
    },
    interactionText: {
        marginRight: 10,
        fontSize: 18,
        fontWeight: '600',
    },

})

