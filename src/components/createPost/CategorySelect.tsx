import { StyleSheet, Text, View, Switch, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../../assets/constants/Colors'
import Category, { CATEGORY_LIST } from '../../models/Category';

const CategorySelect = () => {
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([])

    const displayedCategories = [...selectedCategories, ...CATEGORY_LIST.filter((c) => !selectedCategories.includes(c))]

    const handleSelectCategory = (category: Category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== category))
            return
        }
        if (selectedCategories.length === 3) {
            setSelectedCategories([...selectedCategories.slice(1), category])
            return
        }
        setSelectedCategories([...selectedCategories, category])
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
                        displayedCategories.map((category) => (
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

        </View>
    )
}

export default CategorySelect

const styles = StyleSheet.create({
    container: {
        width: "95%",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'left',
    },
    titleText: {
        color: Colors.whiteBg,
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 15,
        width: "95%"
    },

    option: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        width: "100%"
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

