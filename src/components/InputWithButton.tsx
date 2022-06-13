import {Modal, StyleSheet, TextInput, View} from 'react-native';
import AppButton from "./AppButton";
import {useState} from "react";


type  InputWithButtonPropsType = {
    // value: string
    // inputHandler: (value: string) => void
    buttonHandler: (goal: string) => void
    visible: boolean
    closeModalHandler: () => void
}

export const InputWithButton = ({buttonHandler, visible, closeModalHandler}: InputWithButtonPropsType) => {
    const [goal, setGoal] = useState<string>("");

    const inputHandler = (value: string) => {
        setGoal(value)
    }

    const buttonAddHandler = () => {
        buttonHandler(goal)
        setGoal("")
    }

    return (
        <Modal visible={visible} animationType={"slide"}>
            <View style={styles.inputContainer}>

                <TextInput value={goal} onChangeText={inputHandler} placeholder={"Type Text"}
                           style={styles.textInput}/>
                <View style={{flexDirection: "row"}}>
                    <View style={{width:"50%", marginRight:10}}>
                        <AppButton onPress={buttonAddHandler} title={"Add"}/>
                    </View>
                    <View style={{width:"50%"}}>
                        <AppButton onPress={closeModalHandler} title={"Close Modal"}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignItems: "center",
        padding: 10,
        justifyContent: "center"
    },
    textInput: {
        borderColor: "black",
        borderWidth: 1,
        padding: 5,
        width: "100%",
    },
});
