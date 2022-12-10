import { Footer, Header, Text, View, StyleSheet } from "../Libs/Components";
import * as Colors from '../Assets/Colors'
export const Workouts = ({ navigation }: any) => {
    return (
        <>
            <View style={style.workouts}>
                <Header />
                <Text>Workouts</Text>
                <Footer navigation={navigation}/>
            </View>
        </>
    );
}

const style = StyleSheet.create({
    workouts:{
        width: '100%',
        height: '100%',
        backgroundColor: Colors.HOME_BACKGROUND
    }
})