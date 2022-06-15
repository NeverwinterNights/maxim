import { StyleSheet, Text, View } from 'react-native';

type  CardPropsType = {
    children: any
    style?: any
}


export const Card = ({children, style}:CardPropsType) => {
 return (       
       <View style={{...styles.container, ...style}}>{children}</View>
    );
};

const styles = StyleSheet.create({
  container: {
      elevation: 8,
      shadowColor: "black",
      shadowOffset: {width: 0, height: 0},
      shadowRadius: 2,
      shadowOpacity: 0.26,
      padding:20,
      borderRadius:2,
  }
});
