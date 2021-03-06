import {Alert, Keyboard, Pressable, StyleSheet, View} from 'react-native';
import AppText from "../src/components/AppText";
import {AppTextInput} from "../src/components/AppTextInput";
import AppButton from "../src/components/AppButton";
import {Card} from "../src/components/Card";
import {useState} from "react";
import {NumberCard} from "../src/components/NumberCard";
import {CustomButton} from "../src/components/CustomButton";


type  StartGameScreenPropsType = {
    startGameHandler: (selectedNumber: number) => void
}

export const StartGameScreen = ({startGameHandler}: StartGameScreenPropsType) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [confirmed, setConfirmed] = useState<boolean>(false);
    const [chosenNumber, setChosenNumber] = useState<number | null>(null);

    const inputHandler = (inputText: string) => {
        setInputValue(inputText.replace(/[^0-9]/g, ""))
    }

    const resetButtonHandler = () => {
        setInputValue("")
        setConfirmed(false)
    }

    const confirmButtonHandler = () => {
        const enteredNumber = parseInt(inputValue)
        if (isNaN(enteredNumber) || enteredNumber <= 0 || enteredNumber > 99) {
            Alert.alert("Invalid number", "Number can be a number between 1 and 99", [{
                text: "Ok", style: "destructive", onPress: resetButtonHandler
            }])
            return
        }
        setConfirmed(true)
        setChosenNumber(enteredNumber)
        setInputValue("")
        Keyboard.dismiss()
    }

    let confirmedOutput

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.sumContainer}>
                <AppText>You selected</AppText>
                <NumberCard>{chosenNumber}</NumberCard>
                <AppButton title={"Start Game"} onPress={() => {
                    chosenNumber ? startGameHandler(chosenNumber) : null
                }}/>

            </Card>
        )
    }

    return (

        <Pressable onPress={() => Keyboard.dismiss()} style={styles.container}>
            <AppText style={{fontWeight: "bold"}}>Game screen!</AppText>
            {/*<View style={styles.inputContainer}>*/}
            <View style={{marginTop: 20}}>
                <Card style={styles.inputContainer}>
                    <AppText>Select a number</AppText>
                    <AppTextInput value={inputValue} onChangeText={inputHandler} style={styles.customStyles}
                                  autoCorrect={false} blurOnSubmit maxLength={2} keyboardType={"number-pad"}/>
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonWrap}>
                            {/*<AppButton onPress={resetButtonHandler} title={"Reset"}/>*/}
                            <CustomButton style={{borderRadius:10}} onPress={resetButtonHandler}>Reset</CustomButton>
                        </View>
                        <View style={styles.buttonWrap}>
                            {/*<AppButton color={"purple"} onPress={confirmButtonHandler} title={"Confirm"}/>*/}
                            <CustomButton style={{borderRadius:10}} color={"purple"} onPress={confirmButtonHandler}>Confirm</CustomButton>
                        </View>
                    </View>
                </Card>
            </View>
            <View style={{marginTop: 20}}>{confirmedOutput}</View>

            {/*</View>*/}
        </Pressable>

    );
};

const styles = StyleSheet.create({
    customStyles: {
        textAlign: "center"
    },
    container: {
        flex: 1,
        alignItems: "center",
        padding: 10,
    },
    inputContainer: {
        width: 340,
        alignItems: "center",

    },
    buttonsContainer: {
        flexDirection: "row",
        width: "100%",
        marginHorizontal: -5,
    },
    buttonWrap: {
        width: "50%",
        paddingHorizontal: 5
    },
    sumContainer: {
        alignItems: "center",
    },


});
