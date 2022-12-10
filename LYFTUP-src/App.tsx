import * as Screens from './Screens/All'
import * as Colors from './Assets/Colors'
import { Image } from './Libs/Components'
import {
  NavigationContainer,
  createNativeStackNavigator
} from './Libs/Navigation'


const headerOptions = {
  headerStyle: {
    backgroundColor: Colors.HEADER,
  },
  headerBackVisible: false,
  headerTitle:'',
}


const Stack = createNativeStackNavigator();
const StackScreens = Object.keys(Screens).map((screen: string, index: number) =>
  <Stack.Screen
    key={index}
    name={screen}
    component={Screens[screen as keyof typeof Screens]}
    options={headerOptions}
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


// https://reactnative.dev/docs/navigation
// https://reactnavigation.org/docs/native-stack-navigator/#options