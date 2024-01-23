import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Post } from '../../models/Post';
import moment from 'moment';
import Colors from '../../../assets/constants/Colors';

interface PostDescriptionProps {
    post: Post;
}

const PostDescription: React.FC<PostDescriptionProps> = ({ post }) => {

    const date = moment(post.createdAt).fromNow();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {post.content}
            </Text>
            <Text style={styles.date}>
                - {date}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        gap: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: '500',
    },
    date: {
        fontSize: 14,
        fontWeight: '400',
        color: Colors.gray,
        marginBottom: 10,
    },
});

export default PostDescription;
