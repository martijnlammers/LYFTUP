import { CreateWorkoutButton } from '../Components/CreateWorkoutButton';
import { View, StyleSheet } from 'react-native';
import { HOME_BACKGROUND } from '../Assets/Colors';
import { Footer } from '../Components/Footer';

export function Home() {
    return (
        <>
            <View style={style.homepage}>
                <Footer />
            </View>
        </>
    )
}

const style = StyleSheet.create({
    homepage: {
        width: '100%',
        height: '100%',
        backgroundColor: HOME_BACKGROUND

    }
})