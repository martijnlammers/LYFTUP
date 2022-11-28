import { CreateWorkoutButton } from '../Components/CreateWorkoutButton';
import { View, StyleSheet } from 'react-native';
import { HomeColor } from '../Assets/colors';

export function Home() {
    return (
        <>
            <View style={style.homepage}>
                
            </View>
        </>
    )
}

const style = StyleSheet.create({
    homepage: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: HomeColor.background
    
    }
})