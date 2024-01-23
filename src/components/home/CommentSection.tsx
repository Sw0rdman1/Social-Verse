import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Post } from '../../models/Post';
import { useEffect, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../../assets/constants/Colors';
import CommentEntity, { getFakeComments } from '../../models/Comment';
import Comment from './Comment';

const NoComments: React.FC = () => {
    return (
        <View>
            <Text>No comments yet</Text>
        </View>
    )
}

interface CommentSectionProps {
    post: Post;
}

const CommentSection: React.FC<CommentSectionProps> = ({ post }) => {
    const [commentsDisplayed, setCommentsDisplayed] = useState(false);
    const [comments, setComments] = useState<CommentEntity[]>([]);

    useEffect(() => {
        setComments(getFakeComments(post.id));
    }, [])

    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity
                onPress={() => {
                    setCommentsDisplayed(!commentsDisplayed);

                }}
                style={[styles.interactionContainer,
                {
                    backgroundColor: Colors.grayTransparent,
                }]}
            >
                <Text style={styles.interactionText}>Show all comments</Text>
                <Text style={styles.interactionNumber}>{comments.length}</Text>
                <FontAwesome name="comments" size={28} color="black" />
            </TouchableOpacity>
            {commentsDisplayed &&
                <View style={{ marginHorizontal: 10 }}>
                    {comments.length ?
                        comments.map((comment, index) => {
                            return (
                                <Comment comment={comment} key={index} />
                            )
                        })
                        : <NoComments />
                    }
                </View>
            }
        </View>
    )
}

export default CommentSection

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: "100%",
    },
    interactionContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 10,
    },
    interactionText: {
        fontSize: 16,
        fontWeight: "600",
        marginHorizontal: 5,

    },
    interactionNumber: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 10,
        marginRight: 5,
    },
})