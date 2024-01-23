// import React, { useEffect, useRef, useState } from "react";
import { Animated as RNAnimated, ScrollView, StyleSheet, View, Text, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { Post } from "../../models/Post";
import Colors from "../../../assets/constants/Colors";
import { useEffect, useRef, useState } from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import AuthorInfo from "./AuthorInfo";
import BackButton from "../ui/BackButton";

const { height } = Dimensions.get("window");

const Header_Max_Height = height - 220;
const Header_Min_Height = 320;
const Scroll_Distance = Header_Max_Height - Header_Min_Height;
const BORDER_RADIUS = 40;


const Swipe = () => {
    const animated = new RNAnimated.Value(0);
    const duration = 1500;



    useEffect(() => {
        RNAnimated.loop(
            RNAnimated.sequence([
                RNAnimated.timing(animated, {
                    toValue: 10,
                    duration: duration,
                    useNativeDriver: true,
                }),
                RNAnimated.timing(animated, {
                    toValue: 0,
                    duration: duration,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    return (

        <RNAnimated.View
            style={[
                {
                    transform: [{ translateY: animated }],
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                }
            ]}
        >
            <Ionicons name="ios-chevron-up" size={24} color="white" />
            <Text style={styles.text}>Swipe for more info</Text>
        </RNAnimated.View>
    );
};

interface DynamicHeaderProps {
    value: RNAnimated.Value;
    post: Post;
    goBackHandler: () => void;
}

const DynamicHeader: React.FC<DynamicHeaderProps> = ({
    value,
    post,
    goBackHandler,
}) => {
    const animatedHeaderHeight = value.interpolate({
        inputRange: [0, Scroll_Distance],
        outputRange: [Header_Max_Height, Header_Min_Height],
        extrapolate: "clamp",
    });

    const animatedOpacity = value.interpolate({
        inputRange: [0, 150],
        outputRange: [1, 0],
        extrapolate: "clamp",
    });

    const animatedArrowOpacity = value.interpolate({
        inputRange: [0, Scroll_Distance],
        outputRange: [0.8, 1],
        extrapolate: "clamp",
    });

    const animatedBackButtonTop = value.interpolate({
        inputRange: [0, Scroll_Distance],
        outputRange: [65, 55],
        extrapolate: "clamp",
    });

    return (
        <RNAnimated.View
            style={[
                {
                    height: animatedHeaderHeight,
                },
            ]}
        >
            <View style={styles.headerContainer}>
                <RNAnimated.View
                    style={[
                        styles.backButon,
                        { top: animatedBackButtonTop, opacity: animatedArrowOpacity },
                    ]}
                >
                    <BackButton size={26} handleBackButton={goBackHandler} />
                </RNAnimated.View>
                <Animated.Image
                    sharedTransitionTag={post.id + ".image"}
                    source={{
                        uri: post.contentPhoto as string,
                    }}
                    style={{
                        width: "100%",
                        height: "115%",
                        position: "absolute",
                        top: 0,
                    }}
                />
                <RNAnimated.View
                    style={{
                        opacity: animatedOpacity,
                        position: "absolute",
                        bottom: 25,
                    }}
                >
                    <Animated.View
                        entering={FadeInDown.delay(700).duration(500)}
                    >
                        <Swipe />
                    </Animated.View>
                </RNAnimated.View>
            </View>
        </RNAnimated.View>
    );
};

interface ScrollViewScreenProps {
    children: React.ReactNode;
    post: Post;
    goBackHandler: () => void;
    scrolViewRef: any;
}

const PostImage: React.FC<ScrollViewScreenProps> = ({
    children,
    post,
    goBackHandler,
    scrolViewRef
}) => {
    const scrollOffsetY = useRef(new RNAnimated.Value(0)).current;

    const animatedPaddingTop = scrollOffsetY.interpolate({
        inputRange: [0, Scroll_Distance],
        outputRange: [0, Scroll_Distance],
        extrapolate: "clamp",
    });

    return (
        <View style={styles.homeContainer}>
            <DynamicHeader
                value={scrollOffsetY}
                post={post}
                goBackHandler={goBackHandler}
            />
            <Animated.View
                entering={FadeInDown.delay(600).duration(500)}

            >
                <AuthorInfo author={post.author} />
            </Animated.View>
            <ScrollView
                ref={scrolViewRef}
                bounces={false}
                style={{
                    backgroundColor: Colors.whiteBg,
                    paddingTop: 0,
                }}

                scrollEventThrottle={5}
                showsVerticalScrollIndicator={false}
                onScroll={RNAnimated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
                    {
                        useNativeDriver: false,
                    }
                )}
            >
                <Animated.View
                    style={styles.borderRadius}
                    entering={FadeInDown.delay(600).duration(500)}
                >
                    <RNAnimated.View
                        style={{
                            height: animatedPaddingTop,
                        }}
                    />
                    {children}
                </Animated.View>
            </ScrollView>
        </View >
    );
};

export default PostImage;

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
    },
    headerContainer: {
        backgroundColor: "transparent",
        flexDirection: "row",
        display: "flex",
        justifyContent: "center",
        height: "100%",
    },

    backButon: {
        position: "absolute",
        left: 5,
        zIndex: 100,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.white,
    },
    borderRadius: {
        borderTopLeftRadius: BORDER_RADIUS,
        borderTopRightRadius: BORDER_RADIUS,
    },
});