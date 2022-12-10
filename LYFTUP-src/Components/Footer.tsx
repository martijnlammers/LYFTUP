import { View, Text, StyleSheet, FooterButton } from '../Libs/Components'
import * as Colors from '../Assets/Colors'
import { Button } from "@rneui/themed";
import * as React from 'react';
export const Footer = ({ navigation }: any) => {
  

    //supported icons and types: https://reactnativeelements.com/docs/components/icon
    let buttonProps = [
        { iconName: "md-home", type: "ionicon", route: "Home" },
        { iconName: "weight-lifter", type: "material-community", route: "Workouts" },
        { iconName: "graph-bar", type: "foundation", route: "Progression" },
        { iconName: "settings-sharp", type: "ionicon", route: "Settings" },
    ];

    const footerButtons = buttonProps.map((properties, index) =>
        <FooterButton key={index} navigation={navigation} buttonProps={properties}/>
    );

    return (
        <>
            <View style={style.footer}>
                {footerButtons}
            </View>
        </>
    );
}

const style = StyleSheet.create({
    footer: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        height: 110,
        width: '100%',
        backgroundColor: Colors.FOOTER_BACKGROUND
    }
})