import { Footer, Header, Text, View, StyleSheet } from "../Libs/Components";
import * as Colors from '../Assets/Colors'
export const Settings = ({ navigation }: any) => {
    return (
        <>
            <View style={style.settings}>
                <Header />
                <Text>Settings</Text>
                <Footer navigation={navigation}/>
            </View>
        </>
    );
}

const style = StyleSheet.create({
    settings:{
        width: '100%',
        height: '100%',
        backgroundColor: Colors.HOME_BACKGROUND
    }
})