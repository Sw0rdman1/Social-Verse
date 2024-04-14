import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Post } from '../../../models/Post';
import moment from "moment";
import Colors from '../../../../assets/constants/Colors';
import { faker } from "@faker-js/faker";

interface PostDescriptionProps {
    post: Post;
}

const PostDescription: React.FC<PostDescriptionProps> = ({ post }) => {

    const dateFormatted = new Date(post.createdAt);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {post.caption}
            </Text>
            <Text style={styles.date}>
                - {moment(dateFormatted).fromNow()}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        gap: 20,
        marginBottom: 10,
    },
    text: {
        fontSize: 19,
        fontWeight: '500',
    },
    date: {
        fontSize: 15,
        fontWeight: '400',
        color: Colors.grayDark,
    },
});

export default PostDescription;
