import { StyleSheet, Pressable, Text } from "react-native"
export function CreateWorkoutButton() {
    return (
        <>
            <Pressable
                style={style.button}
                onPress={() => console.log("Button pressed")}>
                <Text style={style.text}>New workout</Text>
            </Pressable>
        </>
    );
}


const style = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.05,
    },
})
