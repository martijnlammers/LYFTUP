import { Text } from "react-native"
import { Button } from "react-native";
export const Workouts = ({ navigation }: any) => {
    
    return (
        <Button
            title="Go to home"
            onPress={() =>
                navigation.navigate('Home')
            }
        />
    );
}