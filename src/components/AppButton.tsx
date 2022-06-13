import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {colors} from "../../utils/colors";



type  ButtonPropsType = {
    title: string
    onPress?: () => void
    color?: keys
}
type keys = keyof typeof colors;


function AppButton({title, onPress, color = "primary"}: ButtonPropsType) {
    return (
        <TouchableOpacity
            style={[styles.button, {backgroundColor: colors[color]}]}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%",
        marginVertical: 10,
    },
    text: {
        color: "white",
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",
    },
});

export default AppButton;
