import React from "react";
import {Text, StyleSheet, Platform, TextProps} from "react-native";

function AppText({ children, ...restProps }: TextProps) {
  return <Text style={[styles.text]} {...restProps}>{children}</Text>;
}

const styles = StyleSheet.create({
  text:  {
    ...Platform.select({
      ios: {
        fontSize: 18,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 16,
        fontFamily: "Roboto",
      }
    })
  }
});

export default AppText;
