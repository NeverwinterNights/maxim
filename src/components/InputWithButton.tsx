import {StyleSheet, TextInput, View} from 'react-native';
import AppButton from "./AppButton";
import {useState} from "react";


type  InputWithButtonPropsType = {
    // value: string
    // inputHandler: (value: string) => void
    buttonHandler: (goal: string) => void
}

export const InputWithButton = ({buttonHandler}: InputWithButtonPropsType) => {
    const [goal, setGoal] = useState<string>("");

    const inputHandler = (value: string) => {
        setGoal(value)
    }
    
    const buttonAddHandler = () => {
        buttonHandler(goal)
        setGoal("")
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput value={goal} onChangeText={inputHandler} placeholder={"Type Text"}
                       style={styles.textInput}/>
            <View style={{flex: 1}}><AppButton onPress={buttonAddHandler} title={"Add"}/></View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    textInput: {
        borderColor: "black",
        borderWidth: 1,
        padding: 5,
        marginRight: 10,
        width: 200,
    },
});
