import { Footer, Header, Text, View, StyleSheet } from "../Libs/Components";
import * as Colors from '../Assets/Colors'
export const Home = ({ navigation }: any) => {
    return (
        <>
            <View style={style.home}>
                <Header />
                <Text>Home</Text>
                <Footer navigation={navigation}/>
            </View>
        </>
    );
}

const style = StyleSheet.create({
    home:{
        width: '100%',
        height: '100%',
        backgroundColor: Colors.HOME_BACKGROUND
    }
})