import { StyleSheet, Text, View } from 'react-native'
import { Post } from '../../../models/Post';
import { useEffect, useState } from 'react';
import CommentEntity from '../../../models/Comment';
import Comment from './Comment';
import CommentInput from './CommentInput';
import { useAppContext } from '../../../context/AppContext';
import { useTheme } from '../../../context/ThemeContext';

const NoComments: React.FC = () => {
    const { theme } = useTheme();
    return (
        <View style={styles.noCommentContainer}>
            <Text style={[styles.noCommentText, { color: theme.gray }]}>No comments yet 😔</Text>
            <Text style={[styles.noCommentText, { color: theme.gray }]}>Be the first to comment!</Text>
        </View>
    )
}

interface CommentSectionProps {
    post: Post;
    scrolViewRef: any;
}

const CommentSection: React.FC<CommentSectionProps> = ({ post, scrolViewRef }) => {
    const [comments, setComments] = useState<CommentEntity[]>([]);
    const { api } = useAppContext();
    const { theme } = useTheme();

    const returnTitle = () => {
        if (comments.length === 1) {
            return '1 Comment';
        } else {
            return `${comments.length} Comments`;
        }
    }

    const fetchComments = async () => {
        const comments = await api.comments.getCommentsForPost(post.id);
        setComments(comments);
    }

    useEffect(() => {
        fetchComments();
    }, [])

    return (
        <View style={[styles.mainContainer, { backgroundColor: theme.backgroundColor }]}>
            <View style={{ marginHorizontal: 5 }}>
                <CommentInput postID={post.id} scrolViewRef={scrolViewRef} refreshData={fetchComments} />

                {comments.length ?
                    <View style={[styles.commentsContainer, {
                        borderColor: theme.gray,
                        backgroundColor: theme.backgroundColor
                    }]}>
                        <Text style={[styles.commentTitle, { color: theme.gray }]}> {returnTitle()}</Text>
                        {comments.map((comment, index) =>
                            <Comment comment={comment} key={index} />
                        )}
                    </View>
                    :
                    <NoComments />
                }
            </View>
        </View>
    )
}

export default CommentSection

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginHorizontal: 5,
    },
    commentsContainer: {
        flex: 1,
        minHeight: 250,
        borderRadius: 20,
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        borderTopWidth: 1,
    },

    commentTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        marginLeft: 10,
    },

    noCommentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        height: 250,
        gap: 5,
    },
    noCommentText: {
        fontSize: 18,
        marginLeft: 5,
    }

})