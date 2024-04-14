import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../../../assets/constants/Colors';
import { Post } from '../../../models/Post';
import { useAppContext } from '../../../context/AppContext';


const ICON_SIZE = 22;


interface InteractionSectionProps {
    post: Post;
}

const InteractionSection: React.FC<InteractionSectionProps> = ({ post }) => {

    const [isLiked, setIsLiked] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const { api, currentUser } = useAppContext();

    useEffect(() => {
        async function fetchData() {
            if (!currentUser) return;
            const numberOfLikes = await api.likes.getLikesForPost(post.id);
            post.numberOfLikes = numberOfLikes;

            console.log(numberOfLikes);



            const numberOfBookmarks = await api.likes.getLikesForPost(post.id);
            post.numberOfBookmarks = numberOfBookmarks;

            const isPostLIked = await api.likes.isPostLikedByUser(post.id, currentUser.id);
            setIsLiked(isPostLIked);

            const isPostBookmarked = await api.likes.isPostLikedByUser(post.id, currentUser.id);
            setIsBookmarked(isPostBookmarked);
        }

        fetchData();
    }, [])

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

