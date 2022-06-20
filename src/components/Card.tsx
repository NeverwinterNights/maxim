import {StyleSheet, View} from 'react-native';
import {Shadow} from 'react-native-shadow-2';

type  CardPropsType = {
    children: any
    style?: any
}


export const Card = ({children, style}: CardPropsType) => {
    return (
        <Shadow>
            <View style={{...styles.container, ...style}}>{children}</View>
        </Shadow>
    );
};

const styles = StyleSheet.create({
    container: {
        // elevation: 8,
        // shadowColor: "black",
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 2,
        // shadowOpacity: 0.26,
        padding: 20,
        borderRadius: 10,

    }
});
