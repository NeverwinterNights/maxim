import {Alert, FlatList, StyleSheet, View} from 'react-native';
import {useEffect, useRef, useState} from "react";
import AppText from "../src/components/AppText";
import {NumberCard} from "../src/components/NumberCard";
import {Card} from "../src/components/Card";
import {Screen} from "../src/components/Screen";
import {Ionicons} from "@expo/vector-icons"
import {CustomButton} from "../src/components/CustomButton";
import {colors} from '../utils/colors';

type  GameScreenPropsType = {
    chosenNumber: number
    onGameOver: (numOfRound: number) => void
}

const generateRandomNumber = (min: number, max: number, exclude: number) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const randomNumber = Math.floor(Math.random() * (max - min)) + min
    if (randomNumber === exclude) generateRandomNumber(min, max, exclude)
    return randomNumber
}

const renderListItem = (value: number, numberOfRound: number) => (
    <View style={styles.list}>
        <AppText>#{numberOfRound}</AppText>
        <AppText>{value}</AppText>
    </View>
)

export const GameScreen = ({chosenNumber, onGameOver}: GameScreenPropsType) => {
    const initialGuess = generateRandomNumber(1, 99, chosenNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState<number[]>([initialGuess]);

    const lowCurrent = useRef(1)
    const highCurrent = useRef(100)

    useEffect(() => {
        if (currentGuess === chosenNumber) {
            onGameOver(pastGuesses.length)
        }
    }, [currentGuess, chosenNumber, onGameOver])


    const nextGuessHandler = (direction: "lower" | "greater") => {
        if ((direction === "lower" && currentGuess < chosenNumber) || (direction === "greater" && currentGuess > chosenNumber)) {
            Alert.alert("Don\' Lie", "Wrong tips!", [{text: "Sorry", style: "cancel"}])
            return
        }
        if (direction === "lower") {
            highCurrent.current = currentGuess
        }
        if (direction === "greater") {
            lowCurrent.current = currentGuess + 1
        }
        const nextNumber = generateRandomNumber(lowCurrent.current, highCurrent.current, currentGuess)
        setCurrentGuess(nextNumber)
        // setRounds((currentRounds) => currentRounds + 1)
        setPastGuesses((pastGuesses) => [nextNumber, ...pastGuesses])
    }


    return (
        <Screen style={styles.container}>
            <AppText>Opponents Guess</AppText>
            <View style={{marginBottom: 10}}>
                <NumberCard>{currentGuess}</NumberCard>
            </View>
            <Card style={styles.buttonContainer}>
                <View style={styles.buttonWrapper}>
                    {/*<AppButton title={"LOWER"} onPress={() => nextGuessHandler("lower")}/>*/}
                    {/*<AppButton title={"LOWER"} onPress={() => nextGuessHandler("lower")}/>*/}
                    <CustomButton onPress={() => nextGuessHandler("lower")}><Ionicons name={"md-remove"}
                                                                                      size={25}/></CustomButton>
                </View>
                <View style={styles.buttonWrapper}>
                    {/*<AppButton title={"GREATER"} onPress={() => nextGuessHandler("greater")}/>*/}
                    <CustomButton onPress={() => nextGuessHandler("greater")}><Ionicons name={"md-add"}
                                                                                        size={25}/></CustomButton>
                </View>
            </Card>
            <View style={{width: 300, flex: 1}}>
                {/*<ScrollView showsVerticalScrollIndicator={false}>*/}
                {/*    {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}*/}
                {/*</ScrollView>*/}
                <FlatList data={pastGuesses} keyExtractor={(item) => item.toString()}
                          renderItem={(item) => renderListItem(item.item, pastGuesses.length-item.index )}/>
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    buttonWrapper: {
        width: "50%",
        paddingHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",

        width: 330,
        maxWidth: "80%",
        marginHorizontal: -10,
        alignItems: "center"
    },
    list: {
        borderColor: colors.black,
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: colors.white,
        flexDirection: "row",
        justifyContent: "space-around"
    }
});
