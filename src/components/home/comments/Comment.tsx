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
        width: "100%",
        flexDirection: "row",
        gap: 10,
        padding: 10,
    },
    avatar: {
        alignItems: "center",
        paddingTop: 5,
    },
    textContainer: {
        flex: 1,
        gap: 5,
        backgroundColor: Colors.whiteSmoke,
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        paddingBottom: 25,
    },
    username: {
        fontWeight: "bold",
        fontSize: 16,
    },
    comment: {
        fontSize: 14,
    },
})