import { View, StyleSheet } from "react-native"
import { Button } from "@rneui/themed";
import { FOOTER_ICON, FOOTER_BUTTON_BACKGROUND } from '../Assets/Colors';

export const FooterButton = ({ navigation, buttonProps }: {navigation:any, buttonProps:{iconName:string, type:string, route:string}}) => {
    return (
        <Button
            onPress={() => { navigation.navigate(buttonProps.route) }}
            icon={{
                name: buttonProps.iconName, 
                type: buttonProps.type,
                size: 40,
                color: FOOTER_ICON,
            }}
            buttonStyle={style.buttonStyle}
        />
    );
}

const style = StyleSheet.create({
    buttonStyle: {
        backgroundColor: FOOTER_BUTTON_BACKGROUND,
        height: 90,
    }
})