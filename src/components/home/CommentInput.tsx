import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';



const Button = ({ onPress }: any) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Ionicons name="send" size={24} color="black" />
        </TouchableOpacity>
    )
}

interface CommentInputProps {
    postID: string;
    scrolViewRef: any;
}

const CommentInput: React.FC<CommentInputProps> = ({ postID, scrolViewRef }) => {
    const [comment, setComment] = useState('')

    const handleCommentChange = (text: string) => {
        setComment(text)
    }

    const handleCommentSubmit = () => {
        // Handle comment submission logic here
        console.log('New comment:', comment)
        setComment('')
    }

    return (

        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Write a comment..."
                value={comment}
                onChangeText={handleCommentChange}
                onFocus={() => {
                    scrolViewRef.current.scrollToEnd({ animated: true })
                }}
            />
            <Button onPress={handleCommentSubmit} />
        </View>
    )
}


export default CommentInput

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    input: {
        backgroundColor: 'whitesmoke',
        padding: 15,
        borderRadius: 15,
        flex: 1,
        marginRight: 10,
        fontSize: 16,
        marginTop: 10,
    },
})