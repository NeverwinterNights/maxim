import {StyleSheet, View} from 'react-native';
import AppText from "./AppText";

type  HeaderPropsType = {
    title: string
}
export const Header = ({title}: HeaderPropsType) => {
    return (
        <View style={styles.container}>
            <AppText>{title}</AppText>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 90, backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center",
    }
});
