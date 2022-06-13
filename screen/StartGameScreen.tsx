import {StyleSheet, View} from 'react-native';
import AppText from "../src/components/AppText";
import {AppTextInput} from "../src/components/AppTextInput";
import AppButton from "../src/components/AppButton";
import {Card} from "../src/components/Card";


export const StartGameScreen = () => {
    return (
        <View style={styles.container}>
            <AppText style={{fontWeight: "bold"}}>Game screen!</AppText>
            {/*<View style={styles.inputContainer}>*/}
            <Card style={styles.inputContainer}>
                <AppTextInput/>
                <View style={styles.buttonContainer}>
                    <View style={[styles.buttonWrap,]}>
                        <AppButton onPress={() => {
                        }} title={"Reset"}/>
                    </View>
                    <View style={styles.buttonWrap}>
                        <AppButton onPress={() => {
                        }} title={"Confirm"}/>
                    </View>
                </View>
            </Card>
            {/*</View>*/}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 10
    },
    inputContainer: {
        width:320,
        maxWidth: "80%"
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
    },
    buttonWrap: {
        width: "50%",
    }

});
