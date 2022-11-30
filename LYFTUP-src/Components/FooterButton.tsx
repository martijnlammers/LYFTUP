import { View, StyleSheet } from "react-native"
import { Button } from "@rneui/themed";
import { ICON, FOOTER_BUTTON_BACKGROUND } from '../Assets/Colors';
import { FooterButtonProperties } from '../Assets/Interfaces';

export function FooterButton({ iconName, type, link }: FooterButtonProperties) {
  return (
    <Button
      onPress={() => { console.log(iconName) }}
      icon={{
        name: iconName,
        type: type,
        size: 40,
        color: ICON,
      }}
      buttonStyle={style.buttonStyle}
    />
  );
}

const style = StyleSheet.create({
  buttonStyle: {
    backgroundColor: FOOTER_BUTTON_BACKGROUND,
    height: 90,
    width: 90
  }
})
