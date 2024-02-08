import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Post } from '../../../models/Post';
import moment from 'moment';
import Colors from '../../../../assets/constants/Colors';

interface PostDescriptionProps {
    post: Post;
}

const PostDescription: React.FC<PostDescriptionProps> = ({ post }) => {


    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {post.content}
            </Text>
            <Text style={styles.date}>
                - {String(post.createdAt)}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        gap: 10,
        height: 130,
    },
    text: {
        fontSize: 17,
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
