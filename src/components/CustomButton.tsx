import React, {CSSProperties} from 'react';
import {StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import {colors} from "../../utils/colors";

type CustomButtonPropsType = {
    children: any
    onPress?: () =>void
    color?: keyof typeof colors
    style?: StyleProp<ViewStyle>
    labelStyle?: StyleProp<TextStyle>;
}


export const CustomButton = ({children, onPress, style, labelStyle, color = "primary"}: CustomButtonPropsType) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={[styles.button, style, {backgroundColor: colors[color]}]}>
                <Text style={[styles.text, labelStyle]}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 30,
        marginVertical: 10,
    },
    text: {
        color: colors.white,
        fontFamily: "open-sans",
        fontSize: 20,
    }
});
