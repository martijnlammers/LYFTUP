import * as Screens from './Screens/All'
import * as Colors from './Assets/Colors'
import { Image } from './Libs/Components'
import {
  NavigationContainer,
  createNativeStackNavigator
} from './Libs/Navigation'



// https://reactnative.dev/docs/navigation
const Stack = createNativeStackNavigator();
const StackScreens = Object.keys(Screens).map((screen: string, index: number) =>
  <Stack.Screen
    key={index}
    name={screen}
    component={Screens[screen as keyof typeof Screens]}

    // https://reactnavigation.org/docs/native-stack-navigator/#options
    options={{
      animation:'fade',
      headerTitle:'',
      headerBackVisible: false,
      headerStyle:{
        backgroundColor: Colors.HEADER
      }
    }}
  />
)
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          {StackScreens}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


