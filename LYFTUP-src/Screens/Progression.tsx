import { Footer, Header, Text, View, StyleSheet } from "../Libs/Components";
import * as Colors from '../Assets/Colors'
export const Progression = ({ navigation }: any) => {
    return (
        <>
            <View style={style.progression}>
                <Header />
                <Text>Progression</Text>
                <Footer navigation={navigation}/>
            </View>
        </>
    );
}

const style = StyleSheet.create({
    progression:{
        width: '100%',
        height: '100%',
        backgroundColor: Colors.HOME_BACKGROUND
    }
})