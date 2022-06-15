import {StyleSheet, View} from 'react-native';
import AppText from "./AppText";
import {colors} from "../../utils/colors";


export const NumberCard = ({children}: any) => {
    return (
        <View style={styles.container}>
            <AppText style={styles.number}>{children}</AppText>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        backgroundColor: colors.purple,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    number: {
        color: colors.light,
        fontSize:22,
    }
});
