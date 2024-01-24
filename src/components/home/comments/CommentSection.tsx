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
}

const CommentSection: React.FC<CommentSectionProps> = ({ post, scrolViewRef }) => {
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
                    if (commentsDisplayed) {
                        scrolViewRef.current.scrollTo({
                            x: 0,
                            y: height + 400,
                            animated: true,
                        })
                    }
                }}
                style={[styles.interactionContainer,
                {
                    backgroundColor: Colors.grayTransparent,
                }]}
            >
                <Text style={styles.interactionText}>{commentsDisplayed ? "Hide comments" : "Show comments"}</Text>
                {!commentsDisplayed && <Text style={styles.interactionNumber}>{comments.length}</Text>}
                {commentsDisplayed ?
                    <AntDesign name="close" size={ICON_SIZE - 4} color="black" /> :
                    <FontAwesome name="comments" size={ICON_SIZE} color="black" />
                }
            </TouchableOpacity>
            {commentsDisplayed &&
                <View style={{ marginHorizontal: 10 }}>
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
        width: "100%",
        marginTop: 10,
    },
    interactionContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        height: 50,
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