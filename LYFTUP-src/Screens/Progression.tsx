import { Text } from "react-native"
import { Button } from "react-native";
export const Progression = ({ navigation }: any) => {
    return (
        <>
            <Button
                title="Go to home"
                onPress={() =>
                    navigation.navigate('Home')
                }
            />
            <Button
                title="Go to workouts"
                onPress={() =>
                    navigation.navigate('Workouts')
                }
            />
        </>

    );
}