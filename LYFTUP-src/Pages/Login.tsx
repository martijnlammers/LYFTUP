import { InputField } from '../Components/InputField';
import { View } from 'react-native';

export function Login() {
    return (
        <>
            <View style={{ top:'100%', justifyContent:'center', alignItems:'center'}}>
                <InputField />
                <InputField />
            </View>
        </>
    )
}