import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommentEntity from '../../../models/Comment';
import Colors from '../../../../assets/constants/Colors';
import Avatar from '../../ui/Avatar';

interface CommentProps {
    comment: CommentEntity;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
    return (
        <View style={styles.container}>
            <View style={styles.avatar}>
                <Avatar size={40} user={comment.author} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.username}>{comment.author.displayName}</Text>
                <Text style={styles.comment}>{comment.text}</Text>
            </View>
        </View>
    )
}

export default Comment

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: Colors.grayTransparent,
        gap: 5,
    },
    avatar: {
        alignItems: "center",
        marginTop: 10,
    },
    textContainer: {
        flex: 1,
        marginLeft: 5,
        gap: 5,
        backgroundColor: "whitesmoke",
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    username: {
        fontWeight: "bold",
        fontSize: 15,
    },
    comment: {
        fontSize: 15,
    },
})