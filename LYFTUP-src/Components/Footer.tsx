import { StyleSheet, View, Text } from "react-native"
import { FOOTER_BACKGROUND } from '../Assets/Colors';
import { FooterButton } from './FooterButton';
import { FooterButtonProperties } from "../Assets/Interfaces";


//supported icons and types: https://reactnativeelements.com/docs/components/icon

let buttonProps: FooterButtonProperties[] = [
    {iconName:"md-home", type:"ionicon", link:""},
    {iconName:"weight-lifter", type:"material-community", link:""},
    {iconName:"graph-bar", type:"foundation", link:""},
    {iconName:"settings-sharp", type:"ionicon", link:""},
];

const footerButtons = buttonProps.map((properties, index) => 
    <FooterButton key={index} {...properties}/>
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
