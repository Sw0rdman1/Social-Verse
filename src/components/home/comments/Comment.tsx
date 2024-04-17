import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommentEntity from '../../../models/Comment';
import Avatar from '../../ui/Avatar';
import { useTheme } from '../../../context/ThemeContext';

interface CommentProps {
    comment: CommentEntity;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
    const { theme } = useTheme();

    return (
        <View style={styles.container}>
            <View style={styles.avatar}>
                <Avatar size={40} user={comment.author} />
            </View>
            <View style={[styles.textContainer, {
                backgroundColor: theme.backgroundColorPrimary,
                shadowColor: theme.gray,
            }]}>
                <Text style={[styles.username, {
                    color: theme.textColor
                }]}>
                    {comment.author.displayName}
                </Text>
                <Text style={[styles.comment, {
                    color: theme.textColor
                }]}>
                    {comment.text}
                </Text>
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
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        paddingBottom: 25,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },
    username: {
        fontWeight: "bold",
        fontSize: 16,
    },
    comment: {
        fontSize: 14,
    },
})