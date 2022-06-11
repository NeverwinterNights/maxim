import {Alert, FlatList, StyleSheet, View} from 'react-native';
import {Screen} from "./src/components/Screen";
import {useState} from 'react';
import {GoalItem} from "./src/components/GoalItem";
import {InputWithButton} from "./src/components/InputWithButton";

type  GoalType = {
    key: string
    value: string
}


export default function App() {
    const [goalData, setGoalData] = useState<GoalType[]>([]);


    const buttonHandler = (goal: string) => {
        setGoalData((prevData) => [{key: Math.random().toString(), value: goal}, ...prevData])
    }

    const onDelete = (id: string) => {
        Alert.alert(
            "Confirm",
            "Delete Goal?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {text: "OK", onPress: () => setGoalData((prevState) => prevState.filter((goal) => goal.key !== id))}
            ]
        );
    }

    return (
        <Screen>
            <View style={styles.container}>
                {/*<View style={styles.inputContainer}>*/}
                {/*    <TextInput value={goal} onChangeText={inputHandler} placeholder={"Type Text"}*/}
                {/*               style={styles.textInput}/>*/}
                {/*    <View style={{flex: 1}}><AppButton onPress={buttonHandler} title={"Add"}/></View>*/}
                {/*</View>*/}

                <InputWithButton buttonHandler={buttonHandler}/>

                {/*<ScrollView showsVerticalScrollIndicator={false}>*/}
                <FlatList showsVerticalScrollIndicator={false} data={goalData}
                          renderItem={({item}) => <GoalItem onDelete={onDelete} id={item.key} title={item.value}/>}/>
                {/*{goalData.map((data) => <View style={styles.item} key={data}><Text>{data}</Text></View>)}*/}
                {/*</ScrollView>*/}
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: "center",
        height: 48,
        width: 100,
        borderRadius: 5
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
