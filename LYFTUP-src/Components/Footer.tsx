import { StyleSheet, View, Text } from "react-native"
import { FOOTER_BACKGROUND } from '../Assets/Colors';
import { FooterButton } from './FooterButton';
import { FooterButtonProperties } from "../Assets/Interfaces";

//supported icons names and types: https://oblador.github.io/react-native-vector-icons/

let buttonProps: FooterButtonProperties[] = [
    {iconName:"home", type:"antdesign", link:""},
    {iconName:"areachart", type:"antdesign", link:""},
    {iconName:"linechart", type:"antdesign", link:""},
    {iconName:"setting", type:"antdesign", link:""},
];

const footerButtons = buttonProps.map((properties, index) => 
    <FooterButton {...properties}/>
);

export function Footer() {
    return (
        <View style={style.footer}>
            {footerButtons}
        </View>
    );
}

const style = StyleSheet.create({
    footer: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        height: 90,
        width: '100%',
        backgroundColor: FOOTER_BACKGROUND
    }
})
