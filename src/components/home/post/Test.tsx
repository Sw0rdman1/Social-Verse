import * as React from 'react';
import {
    Animated as RNAnimated,
    Dimensions,
    Image,
    FlatList,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useAppContext } from '../../../context/AppContext';
import Colors from '../../../../assets/constants/Colors';
import Animated from 'react-native-reanimated';
import moment from 'moment';

const { width } = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.87;
const ITEM_HEIGHT = ITEM_WIDTH * 1.45;


export default function TestPostList({ navigation }: any) {
    const scrollX = React.useRef(new RNAnimated.Value(0)).current;
    const { initialPosts } = useAppContext();



    return (
        <RNAnimated.FlatList
            data={initialPosts}
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
                        <View style={{
                            borderRadius: 18,
                            shadowColor: Colors.black,
                            shadowOpacity: 0.2,
                            shadowRadius: 20,
                            shadowOffset: {
                                width: 0,
                                height: 0,
                            },
                            padding: 2,
                            backgroundColor: Colors.white,
                        }}>
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
                                    if (initialPosts[index].createdAt instanceof Date) {
                                        const date = moment(item.createdAt).fromNow();
                                        initialPosts[index].createdAt = date;
                                    }
                                    navigation.navigate("Post", {
                                        post: initialPosts[index],
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
                                    backgroundColor: Colors.white,
                                    shadowColor: Colors.black,
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
                                        borderColor: Colors.white,
                                        marginRight: 5,
                                    }}
                                />
                                <View style={{ gap: 2 }}>
                                    <Text style={{ fontSize: 18, fontWeight: '600', color: Colors.black }}>{item.author.displayName}</Text>
                                    <Text style={{ fontSize: 14, fontWeight: '600', color: Colors.gray }}> - "{item.caption}"</Text>
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
});