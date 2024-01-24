import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Avatar from '../../ui/Avatar'
import { User } from '../../../models/User'
import Colors from '../../../../assets/constants/Colors'

interface AuthorInfoProps {
    author: User
}

const AuthorInfo: React.FC<AuthorInfoProps> = ({ author }) => {

    return (
        <View style={styles.container}>
            <Avatar user={author} size={45} />
            <View>
                <Text style={[styles.name]} numberOfLines={1}>
                    {author.displayName}
                </Text>
                <Text style={[styles.email]}>{author.email}</Text>
            </View>
        </View>
    )
}


export default AuthorInfo

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        gap: 10,
        marginTop: 5,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        backgroundColor: Colors.white,
        borderTopEndRadius: 40,
        borderTopStartRadius: 40,
        height: 80,
    },
    name: {
        fontSize: 19,
        fontWeight: "800",
        textTransform: "uppercase",
        letterSpacing: -1,
    },
    email: {
        fontSize: 13,
        fontWeight: "500",
    },

})