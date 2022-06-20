import {Image, StyleSheet, View} from 'react-native';
import AppText from "../src/components/AppText";
import {Screen} from "../src/components/Screen";
import AppButton from "../src/components/AppButton";

type GameOverScreenPropsType = {
    countRound: number
    userNumber: number | null
    configureStartGame: () => void
}

export const GameOverScreen = ({countRound, userNumber, configureStartGame}: GameOverScreenPropsType) => {
    return (
        <Screen>
            <View style={styles.container}>
                <AppText>Game is Over</AppText>
                <Image style={styles.image} source={require("./../assets/success.png")}/>
                <AppText>Number of rounds: {countRound}</AppText>
                <AppText>Number was: {userNumber}</AppText>
                <AppButton title={"Start new game"} onPress={configureStartGame}/>
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10
    },
    image: {
        width: 200,
        height: 200,
        marginVertical:15,
        borderRadius:5
    }
});
