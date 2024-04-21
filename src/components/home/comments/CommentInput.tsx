import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useAppContext } from '../../../context/AppContext';
import Avatar from '../../ui/Avatar';
import { useTheme } from '../../../context/ThemeContext';


const { height } = Dimensions.get("window");


const Button = ({ onPress }: any) => {
    const { theme } = useTheme();

    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, {
            backgroundColor: theme.primaryColorVariants.mediumOpacity,
        }]}>
            <Ionicons name="send" size={24} color={theme.primaryColor} />
        </TouchableOpacity>
    )
}

interface CommentInputProps {
    postID: number;
    scrolViewRef: any;
    refreshData: () => Promise<void>
}

const CommentInput: React.FC<CommentInputProps> = ({ postID, scrolViewRef, refreshData }) => {
    const [comment, setComment] = useState('')
    const { api, currentUser } = useAppContext();
    const { theme } = useTheme();

    const handleCommentChange = (text: string) => {
        setComment(text)
    }

    const handleCommentSubmit = async () => {
        if (!comment) return;
        await api.comments.createComment(postID, comment, currentUser.id);
        setComment('')
        await refreshData();
    }



    return (

        <View style={styles.container}>
            <Avatar size={40} user={currentUser} />
            <TextInput
                style={[styles.input, {
                    backgroundColor: theme.backgroundColorPrimary,
                    color: theme.textColor
                }]}
                placeholder="Write a comment..."
                placeholderTextColor={theme.gray}
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
        gap: 10,
        padding: 5,
        marginTop: 20,
    },

    input: {
        padding: 14,
        borderRadius: 15,
        flex: 1,
        fontSize: 18,
        paddingBottom: 40,
    },
    buttonContainer: {
        padding: 10,
        marginTop: 15,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: 44,
        width: 44,
    }
})