import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../../assets/constants/Colors';
import { useAppContext } from '../../../context/AppContext';
import { Image } from 'expo-image';
import Avatar from '../../ui/Avatar';


const { height } = Dimensions.get("window");


const Button = ({ onPress }: any) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
            <Ionicons name="send" size={24} color={Colors.gradient2} />
        </TouchableOpacity>
    )
}

interface CommentInputProps {
    postID: number;
    scrolViewRef: any;
    refreshData: () => void;
}

const CommentInput: React.FC<CommentInputProps> = ({ postID, scrolViewRef, refreshData }) => {
    const [comment, setComment] = useState('')
    const { api, currentUser } = useAppContext();

    const handleCommentChange = (text: string) => {
        setComment(text)
    }

    const handleCommentSubmit = async () => {
        await api.comments.createComment(postID, comment, currentUser.id);
        setComment('')
        await refreshData();
    }



    return (

        <View style={styles.container}>
            <Avatar size={40} user={currentUser} />
            <TextInput
                style={styles.input}
                placeholder="Write a comment..."
                value={comment}
                onChangeText={handleCommentChange}
                onFocus={() => {
                    scrolViewRef.current.scrollTo({
                        x: 0,
                        y: height * 0.5 + 40,
                        animated: true,
                    })

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
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        padding: 5,
        marginTop: 20,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    input: {
        backgroundColor: Colors.whiteSmoke,
        padding: 14,
        borderRadius: 15,
        flex: 1,
        fontSize: 18,
    },
    buttonContainer: {
        backgroundColor: Colors.gradient2Transparent,
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: 44,
        width: 44,
    }
})