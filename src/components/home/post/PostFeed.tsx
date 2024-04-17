import {
    Animated as RNAnimated,
    Dimensions,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { useAppContext } from '../../../context/AppContext';
import Animated from 'react-native-reanimated';
import { Image } from 'expo-image';
import { useTheme } from '../../../context/ThemeContext';
import { useRef, useState } from 'react';

const { width } = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.87;
const ITEM_HEIGHT = ITEM_WIDTH * 1.45;
const PAGE_SIZE = 3;


export default function PostFeed({ navigation }: any) {
    const { initialPosts, api } = useAppContext();
    const [posts, setPosts] = useState(initialPosts);
    const { theme } = useTheme();

    const scrollX = useRef(new RNAnimated.Value(0)).current;

    const handleEndReached = async () => {
        if (initialPosts.total === posts.data.length) return;

        const currentPage = Math.ceil(posts.data.length / PAGE_SIZE);
        const newPosts = await api.posts.getPosts(currentPage + 1, PAGE_SIZE);

        setPosts({
            data: [...posts.data, ...newPosts.data],
            total: newPosts.total,
        });
    }

    return (
        <RNAnimated.FlatList
            onEndReached={handleEndReached}
            onEndReachedThreshold={0.5}
            data={posts.data}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onScroll={RNAnimated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: true }
            )}
            renderItem={({ item, index }) => {
                const inputRange = [
                    (index - 1) * width,
                    index * width,
                    (index + 1) * width,
                ];

                const translateX = scrollX.interpolate({
                    inputRange,
                    outputRange: [-width * 0.7, 0, width * 0.7],
                });


                return (
                    <View style={{ width, justifyContent: "center", alignItems: "center" }}>
                        <View style={[styles.mainContainer, {
                            backgroundColor: theme.backgroundColorPrimary,
                            shadowColor: theme.textColor,
                        }]}>
                            <TouchableOpacity
                                activeOpacity={0.95}
                                style={{
                                    width: ITEM_WIDTH,
                                    height: ITEM_HEIGHT,
                                    overflow: 'hidden',
                                    alignItems: 'center',
                                    borderRadius: 16,
                                }}
                                onPress={() => {

                                    navigation.navigate("Post", {
                                        post: initialPosts.data[index],
                                        previousPage: "Home",
                                    });

                                }}
                            >

                                <RNAnimated.View
                                    style={{
                                        transform: [{ translateX }],
                                    }}
                                >

                                    <Animated.Image
                                        sharedTransitionTag={item.id + ".image"}
                                        source={{ uri: item.imageUrl }}
                                        style={{
                                            width: ITEM_WIDTH * 1.4,
                                            height: ITEM_HEIGHT,
                                        }}
                                    />
                                </RNAnimated.View>

                            </TouchableOpacity>
                            <View
                                style={{
                                    position: 'absolute',
                                    width: ITEM_WIDTH,
                                    height: 65,
                                    padding: 10,
                                    bottom: -10,
                                    right: 2,
                                    borderBottomLeftRadius: 16,
                                    borderBottomRightRadius: 16,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    backgroundColor: theme.backgroundColorPrimary,
                                    shadowColor: theme.textColor,
                                    shadowOpacity: 0.2,
                                    shadowRadius: 20,
                                    shadowOffset: {
                                        width: 0,
                                        height: 0,
                                    },

                                }}
                            >
                                <Image
                                    source={{ uri: item.author.profilePicture }}
                                    style={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: 60,
                                        borderWidth: 6,
                                        borderColor: theme.backgroundColor,
                                        marginRight: 5,
                                    }}
                                />
                                <View style={{ gap: 2 }}>
                                    <Text style={{ fontSize: 18, fontWeight: '600', color: theme.textColor }}>{item.author.displayName}</Text>
                                    <Text style={{ fontSize: 14, fontWeight: '600', color: theme.gray }}> - "{item.caption}"</Text>
                                </View>

                            </View>
                        </View>
                    </View>
                )
            }}
        />

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainContainer: {
        borderRadius: 18,
        shadowOpacity: 0.2,
        shadowRadius: 20,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        padding: 2,
    }
});