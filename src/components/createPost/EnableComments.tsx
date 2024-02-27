import { StyleSheet, Switch, Text, View } from 'react-native'
import Colors from '../../../assets/constants/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface EnableCommentsProps {
    enableComments: boolean;
    setEnableComments: (value: boolean) => void;
}

const EnableComments: React.FC<EnableCommentsProps> = ({ enableComments, setEnableComments }) => {

    const handleToggleComments = () => {
        setEnableComments(!enableComments)
    }

    return (
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
    )
}

export default EnableComments

const styles = StyleSheet.create({
    commentEnableContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "95%",
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
})