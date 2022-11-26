import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from "react-native"


export function InputField() {
    const [text, setText] = useState('');

    

    return (
        <>

            <View style={{ padding: 10 }}>
                <TextInput
                    style={style.inputField}
                    onChangeText={newText => setText(newText)}
                    defaultValue={text}
                />
                <Text>{text}</Text>
            </View>
        </>
    );
}

const style = StyleSheet.create({
    red: {
        padding: 10,
        fontSize: 42,
        color: "red"
    },

    inputField: {
        color: "white",
        backgroundColor: "green"
    }
})
