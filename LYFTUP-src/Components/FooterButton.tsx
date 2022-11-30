import { View } from "react-native"
import { StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
import { ICON, FOOTER_BUTTON_BACKGROUND } from '../Assets/Colors';
import { FooterButtonProperties } from '../Assets/Interfaces';




export function FooterButton({ iconName, type, link }: FooterButtonProperties) {
    return (
        <>
            <Button
              icon={{
                name: iconName,
                type: type,
                size: 40,
                color: ICON,
              }}
              buttonStyle={{
                backgroundColor: FOOTER_BUTTON_BACKGROUND,
              }}
            />
        </>
    );
}


