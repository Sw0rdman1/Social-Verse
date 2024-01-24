import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Post } from '../../../models/Post';
import { useEffect, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../../../assets/constants/Colors';
import CommentEntity, { getFakeComments } from '../../../models/Comment';
import Comment from './Comment';
import { MaterialIcons } from '@expo/vector-icons';
import CommentInput from './CommentInput';
import { AntDesign } from '@expo/vector-icons';

const ICON_SIZE = 28;
const { height } = Dimensions.get("window");

const NoComments: React.FC = () => {
    return (
        <View>
            <Text>No comments yet</Text>
        </View>
    )
}

interface CommentSectionProps {
    post: Post;
    scrolViewRef: any;
    commentsDisplayed: boolean;
}

const CommentSection: React.FC<CommentSectionProps> = ({ post, scrolViewRef, commentsDisplayed }) => {
    const [comments, setComments] = useState<CommentEntity[]>([]);

    useEffect(() => {
        setComments(getFakeComments(post.id));
    }, [])

    return (
        <View style={styles.mainContainer}>

            {commentsDisplayed &&
                <View style={{ marginHorizontal: 5 }}>
                    <CommentInput postID={post.id} scrolViewRef={scrolViewRef} />
                    {comments.length ?
                        comments.map((comment, index) =>
                            <Comment comment={comment} key={index} />
                        )
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
        backgroundColor: Colors.grayTransparent,
        borderRadius: 20,
        marginHorizontal: 5,
    },
})