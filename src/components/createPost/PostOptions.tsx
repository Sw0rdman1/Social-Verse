import { StyleSheet, Text, View, Switch, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../../assets/constants/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Category, { CATEGORY_LIST } from '../../models/Category';

const PostOptions = () => {
    const [enableComments, setEnableComments] = useState(false)
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([])

    const handleToggleComments = () => {
        setEnableComments(!enableComments)
    }

    const handleSelectCategory = (category: Category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== category))
            return
        }
        if (selectedCategories.length === 3) {
            setSelectedCategories([...selectedCategories.slice(1), category])
            return
        }
        setSelectedCategories([...selectedCategories.slice(1), category])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Category</Text>
            <View style={styles.option}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        CATEGORY_LIST.map((category) => (
                            <TouchableOpacity
                                key={category.id}
                                style={[
                                    styles.category,
                                    selectedCategories.includes(category) && styles.selectedCategory,
                                ]}
                                onPress={() => handleSelectCategory(category)}
                            >
                                <Text style={[
                                    styles.categoryText,
                                    selectedCategories.includes(category) && styles.categoryTextSelected,
                                ]}>{category.emoji} {category.name}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>
            <View style={styles.commentEnableContainer}>
                <View style={styles.textContainer}>
                    <MaterialCommunityIcons name="comment-processing-outline" size={30} color={Colors.whiteBg} />
                    <Text style={styles.commentEnable}>Allow Comments</Text>
                </View>
                <Switch
                    value={enableComments}
                    onValueChange={handleToggleComments}
                    trackColor={{ false: Colors.gradient2, true: Colors.gradient2 }}
                />
            </View>
        </View>
    )
}

export default PostOptions

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'left',
    },

    commentEnableContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        width: "90%",
    },

    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    commentEnable: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.whiteBg,
        marginLeft: 10,
    },

    titleText: {
        color: Colors.whiteBg,
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 10,
        width: "90%"
    },

    option: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        width: "95%"
    },
    categories: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    category: {
        padding: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 25,
        marginRight: 10,
        borderColor: Colors.grayTransparentMore,
    },

    categoryText: {
        color: Colors.whiteBg,
        fontWeight: '600',
        fontSize: 16,
    },

    selectedCategory: {
        backgroundColor: Colors.whiteBg,
    },
    categoryTextSelected: {
        color: Colors.black,
    },
})

