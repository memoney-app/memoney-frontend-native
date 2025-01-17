// import React from 'react';
// import 'react-native-gesture-handler';
// import {NavigationContainer} from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
// // import {HomeScreen} from './src/screens/HomeScreen';
// // import {TestScreen} from './src/screens/TestScreen';

// import WebviewContainer from './components/WebviewContainer.tsx';

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Details"
//         screenOptions={{
//           ...TransitionPresets.SlideFromRightIOS,
//           headerShown: false,
//         }}>
//         <Stack.Screen
//           options={{
//             transitionSpec: {
//               open: {
//                 animation: 'spring',
//                 config: {
//                   stiffness: 2000,
//                   damping: 1000,
//                 },
//               },
//               close: {
//                 animation: 'spring',
//                 config: {
//                   stiffness: 1000,
//                   damping: 500,
//                 },
//               },
//             },
//           }}
//           name="Details"
//           component={WebviewContainer}
//         />
//         {/* <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Test" component={TestScreen} /> */}
//         {/* 추가 스크린은 여기에 계속해서 등록하면 됩니다. */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Home from './src/screens/Home';
import Settings from './src/screens/Settings';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Details"
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
