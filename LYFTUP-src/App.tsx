
import React from 'react'
import * as Screen from './Libs/Screens'
import {
  NavigationContainer,
  createNativeStackNavigator
} from './Libs/Navigation'

import { Text } from './Libs/Components';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Screen.Home} options={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerBackVisible: false,
            headerTitle: () => <Text> Hello</Text>,

          }} />
          <Stack.Screen name="Settings" component={Screen.Settings} options={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerBackVisible: false,
            headerTitle: () => <Text> Hello</Text>

          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
