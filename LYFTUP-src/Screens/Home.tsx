import { Text } from "react-native"
import { Button } from "react-native";
export const Home = ({ navigation }: any) => {
    return (
        <Button
            title="Go to settings"
            onPress={() =>
                navigation.navigate('Settings')
            }
        />
    );
}