import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Colors from '../../../assets/constants/Colors'

interface CaptionInputProps {
    caption: string;
    setCaption: (caption: string) => void;
}

const CaptionInput: React.FC<CaptionInputProps> = ({ caption, setCaption }) => {
    return (
        <View
            style={styles.captionInputContainer}
        >
            <Text style={styles.captionInputTitle}>Caption</Text>
            <TextInput
                style={styles.captionInput}
                placeholder="Enter post caption"
                placeholderTextColor={Colors.gray}
                value={caption}
                onChangeText={setCaption}
            />
        </View>
    )
}

export default CaptionInput

const styles = StyleSheet.create({
    captionInputContainer: {
        width: "95%",
        borderColor: Colors.grayTransparentMore,
        borderWidth: 1,
        borderRadius: 10,
        paddingBottom: 5,
    },
    captionInputTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.white,
        marginTop: 10,
        marginLeft: 10,
        opacity: 0.8
    },
    captionInput: {
        width: "100%",
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 20,
        color: Colors.whiteBg
    },
})