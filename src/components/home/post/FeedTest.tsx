import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useAppContext } from '../../../context/AppContext';
import { useState } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { Image } from 'expo-image';
import Animated from 'react-native-reanimated';

const { width, height } = Dimensions.get('screen');

const FeedTest = ({ navigation }: any) => {
    const { initialPosts, api } = useAppContext();
    const [posts, setPosts] = useState(initialPosts);
    const { theme } = useTheme();

    return (
        <FlatList
            style={styles.container}
            data={posts.data}
            pagingEnabled
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                    <TouchableOpacity
                        activeOpacity={0.95}
                        onPress={() => {
                            navigation.navigate("Post", {
                                post: item,
                                previousPage: "Home",
                            });
                        }}
                        style={[styles.postContainer, { shadowColor: theme.textColor, backgroundColor: theme.backgroundColorPrimary }]}>
                        <Animated.Image
                            sharedTransitionTag={item.id + ".image"}
                            source={{ uri: item.imageUrl }}
                            style={styles.postImage}
                        />
                        <View style={[styles.authorContainer, {
                            backgroundColor: theme.backgroundColorPrimary,
                            shadowColor: theme.textColor,
                        }]}>
                            <Image
                                style={[styles.avatar, {
                                    borderColor: theme.backgroundColor,
                                }]}
                                source={{ uri: item.author.profilePicture }}
                            />
                            <View style={{ gap: 4 }}>
                                <Text style={{ fontSize: 18, fontWeight: '600', color: theme.textColor }}>{item.author.displayName}</Text>
                                <Text style={{ fontSize: 14, fontWeight: '600', color: theme.gray }}> - "{item.caption}"</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Animated.View

                        style={{ height: 10, zIndex: -10 }}
                    />
                </View>
            )}
            showsVerticalScrollIndicator={false}
        />

    )
}

export default FeedTest

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemContainer: {
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
    },
    postContainer: {
        borderRadius: 15,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
    },
    postImage: {
        width: width - 30,
        height: height - 400,
        borderRadius: 15,
    },
    authorContainer: {
        paddingTop: 10,
        paddingHorizontal: 10,
        bottom: 10,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 60,
        borderWidth: 1,
        marginRight: 5,
    },
    author: {
        fontSize: 18,
        fontWeight: '700',
    },


})