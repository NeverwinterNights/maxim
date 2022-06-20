import {StyleSheet, View} from 'react-native';
import AppText from "./AppText";
import {colors} from "../../utils/colors";

type  HeaderPropsType = {
    title: string
}
export const Header = ({title}: HeaderPropsType) => {
    return (
        <View style={styles.container}>
            <AppText style={{fontFamily: "open-sans-bold", fontSize:20}}>{title}</AppText>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 90,
        backgroundColor: colors.purple,
        alignItems: "center",
        justifyContent: "center",
    }
});
