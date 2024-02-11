import React, { useState, useEffect } from 'react';
import { Image, View, Platform, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Colors from '../../../assets/constants/Colors';

interface ImagePickerProps {
    image: string;
    setImage: (image: string) => void;
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
            setImage(result.assets[0].uri);
        }
    };

    return (
        <TouchableOpacity style={styles.button} onPress={pickImage}>
            {image ?
                <Image source={{ uri: image }} style={styles.image} />
                : <View style={styles.noPhotoContainer}>
                    <Ionicons name="md-images" size={24} color={Colors.whiteBg} />
                    <Text style={styles.buttonText}>Gallery</Text>
                </View>}
        </TouchableOpacity>
    );
}

const ImagePickerCamera: React.FC<ImagePickerProps> = ({ image, setImage }) => {

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.button} onPress={pickImage}>
                <Ionicons name="md-camera" size={24} color={Colors.whiteBg} />
                <Text style={styles.buttonText}>Camera</Text>
            </TouchableOpacity>
        </View>
    );
}

const MyImagePicker = ({ image, setImage }: ImagePickerProps) => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <ImagePickerGallery image={image} setImage={setImage} />
        </View>
    );
}

export default MyImagePicker;

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: 270,
        backgroundColor: Colors.grayTransparentLess,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,

    },
    buttonText: {
        color: Colors.whiteBg,
        fontSize: 20
    },
    image: {
        width: "100%",
        height: "100%",
        flex: 1,
    },
    noPhotoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        flex: 1,

    }

});
