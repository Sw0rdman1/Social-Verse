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
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.button} onPress={pickImage}>
                <Ionicons name="md-images" size={24} color={Colors.whiteBg} />
                <Text style={styles.buttonText}>Camera Roll</Text>
            </TouchableOpacity>

        </View>
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
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <ImagePickerGallery image={image} setImage={setImage} />
            <ImagePickerCamera image={image} setImage={setImage} />
        </View>
    );
}

export default MyImagePicker;

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.gradient2,
        padding: 10,
        borderRadius: 25,
        margin: 10,
        width: 300,
    },
    buttonText: {
        fontSize: 24,
        marginLeft: 10,
        color: Colors.whiteBg,
        fontWeight: 'bold',
    },
});
