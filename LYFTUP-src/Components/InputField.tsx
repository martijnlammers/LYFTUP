import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from "react-native"


export function InputField() {
    const [text, setText] = useState('');
    return (
        <>
            <TextInput
                style={style.inputField}
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />
            {/* <Text>{text}</Text> */}
        </>
    );
}

const style = StyleSheet.create({
    red: {
        padding: 50,
        fontSize: 100,
        color: "red"
    },

    inputField: {
        marginTop: 15,
        marginBottom: 15,
        height: 55,
        width: 300,
        fontSize:26,
        textAlign:'center',
        color: "white",
        backgroundColor: "teal"
    }
})
