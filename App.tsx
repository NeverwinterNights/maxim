import {useCallback, useEffect, useState} from 'react';
import {Header} from "./src/components/Header";
import {StartGameScreen} from "./screen/StartGameScreen";
import {GameScreen} from "./screen/GameScreen";
import {GameOverScreen} from "./screen/GameOverScreen";
import * as Font from "expo-font"
import * as SplashScreen from 'expo-splash-screen';
import {View} from "react-native";
import {Screen} from "./src/components/Screen";


const fetchFonts = () => {
    return Font.loadAsync({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
    })
}

export default function App() {
    const [userNumber, setUserNumber] = useState<number | null>(null);
    const [countRound, setCountRound] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        async function prepare() {
            try {
                await SplashScreen.preventAutoHideAsync();
                await fetchFonts()
                await new Promise(resolve => setTimeout(resolve, 2000));
            } catch (e) {
                console.warn(e);
            } finally {
                setIsLoaded(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (isLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [isLoaded]);

    if (!isLoaded) {
        return null;
    }

    const startGameHandler = (selectedNumber: number) => {
        setUserNumber(selectedNumber)
    }

    const configureStartGame = () => {
        setCountRound(0)
        setUserNumber(null)
    }

    let content = <StartGameScreen startGameHandler={startGameHandler}/>

    const gameOverHandler = (numOfRound: number) => {
        setCountRound(numOfRound)
    }

    if (userNumber && countRound <= 0) content = <GameScreen chosenNumber={userNumber} onGameOver={gameOverHandler}/>
    if (countRound > 0) content =
        <GameOverScreen configureStartGame={configureStartGame} countRound={countRound} userNumber={userNumber}/>
    return (
        <View onLayout={onLayoutRootView} style={{flex: 1}}>
            <Screen>
                <Header title={"Guess a number"}/>
                {content}
            </Screen>
        </View>
    );
}
