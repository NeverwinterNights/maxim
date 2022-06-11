import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type  GoalItemPropsType = {
    title: string
    onDelete: (id: string) => void
    id: string
}


export const GoalItem = ({title, onDelete, id}: GoalItemPropsType) => {
    return (
        <TouchableOpacity onPress={()=> onDelete(id)}>
            <View style={styles.item}><Text>{title}</Text></View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        marginVertical: 5,
        borderWidth: 1,
        backgroundColor: "#ccc",
        borderColor: "black",
        padding: 5
    },
});
