import React, { useState, useEffect } from 'react';
import { Image, View, Platform, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Colors from '../../../assets/constants/Colors';

interface ImagePickerProps {
    image: ImagePicker.ImagePickerAsset | null;
    setImage: (image: ImagePicker.ImagePickerAsset) => void;
}

const ImagePickerGallery: React.FC<ImagePickerProps> = ({ image, setImage }) => {

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0]);
        }
    };

    return (
        <TouchableOpacity style={styles.button} onPress={pickImage}>
            {image ?
                <Image source={{ uri: image.uri }} style={styles.image} />
                : <View style={styles.noPhotoContainer}>
                    <Ionicons name="md-images" size={32} color={Colors.whiteBg} />
                    <Text style={styles.buttonText}>Gallery</Text>
                </View>}
        </TouchableOpacity>
    );
}


const MyImagePicker = ({ image, setImage }: ImagePickerProps) => {
    return (
        <ImagePickerGallery image={image} setImage={setImage} />
    );
}

export default MyImagePicker;

const styles = StyleSheet.create({
    button: {
        aspectRatio: 1,
        width: "90%",
        backgroundColor: Colors.grayTransparentLess,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,

    },
    buttonText: {
        color: Colors.whiteBg,
        fontSize: 22,
        fontWeight: '600',
    },
    image: {
        width: "100%",
        height: "100%",
        flex: 1,
        borderRadius: 20,
    },
    noPhotoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        flex: 1,

    }

});
