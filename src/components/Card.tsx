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
      // width: 330,
      shadowColor: "black",
      shadowOffset: {width: 0, height: 2},
      shadowRadius: 6,
      shadowOpacity: 0.26,
      padding:20,
      borderRadius:10,
  }
});
