import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Post } from '../../../models/Post';
import { useEffect, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../../../assets/constants/Colors';
import CommentEntity from '../../../models/Comment';
import Comment from './Comment';
import { MaterialIcons } from '@expo/vector-icons';
import CommentInput from './CommentInput';
import { AntDesign } from '@expo/vector-icons';
import { useAppContext } from '../../../context/AppContext';

const NoComments: React.FC = () => {
    return (
        <View style={styles.noCommentContainer}>
            <Text style={styles.noCommentText}>No comments yet 😔</Text>
            <Text style={styles.noCommentText}>Be the first to comment!</Text>
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

    const fetchComments = async () => {
        const comments = await api.comments.getCommentsForPost(post.id);
        console.log('Comments:', comments);

        setComments(comments);
    }

    useEffect(() => {
        fetchComments();
    }, [])

    return (
        <View style={styles.mainContainer}>
            <View style={{ marginHorizontal: 5 }}>
                <CommentInput postID={post.id} scrolViewRef={scrolViewRef} refreshData={fetchComments} />
                {comments.length ?
                    comments.map((comment, index) =>
                        <Comment comment={comment} key={index} />
                    )
                    : <NoComments />
                }
            </View>
        </View>
    )
}

export default CommentSection

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.whiteBg,
        borderRadius: 20,
        marginHorizontal: 5,
    },
    noCommentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        height: 270,
        gap: 5,
    },
    noCommentText: {
        fontSize: 18,
        color: Colors.grayDark,
        marginLeft: 5,
    }

})