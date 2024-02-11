import { Image, StyleSheet, Text, View } from 'react-native'
import MyImagePicker from '../../../components/createPost/ImagePicker'
import Colors from '../../../../assets/constants/Colors'
import { useEffect, useState } from 'react'
import GradientBackground from '../../../components/ui/GradientBackground'
import { StackNavigationProp } from '@react-navigation/stack'

interface CreatePostScreenProps {
    navigation: StackNavigationProp<any, any>;
}

const CreatePostScreen: React.FC<CreatePostScreenProps> = ({ navigation }) => {

    const [image, setImage] = useState("")

    useEffect(() => {
        navigation.navigate("CreatePost", { image })
    }, [image])

    return (
        <GradientBackground inverted centerItems>
            import {StyleSheet} from 'react-native';
            import {BlurView} from '@react-native-community/blur';

            // ...

            const CreatePostScreen: React.FC<CreatePostScreenProps> = ({navigation}) => {
                // ...

                return (
                <BlurView style={styles.container} blurType="light" blurAmount={10}>
                    {/* Your content here */}
                </BlurView>
                );
            }

                // ...

                <Text style={{ color: Colors.whiteBg }}>Create Post</Text>
                <MyImagePicker image={image} setImage={setImage} />


            </View>
        </GradientBackground >
    )
}

export default CreatePostScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

})