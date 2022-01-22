import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as SplashScreen from 'expo-splash-screen';
import LogIn from './src/components/LogIn';


import HomePage from "./src/components/HomePage"
import SearchPage from "./src/components/SearchPage"
import ChatPage from "./src/components/ChatPage"
import MyPage from "./src/components/MyPage"

const Tab = createBottomTabNavigator();

function sleep (ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}

async function delay_splash() {
  await SplashScreen.preventAutoHideAsync();
  await sleep(1500);
  await SplashScreen.hideAsync();    
};



function Router() {
  delay_splash(); //스플래시 화면 2초 실행.
  return (
    // <NavigationContainer>
    //   <StatusBar style="auto" />
    //   <Tab.Navigator initialRouteName='Home'>
    //     <Tab.Screen name="Home" component={HomePage} />
    //     <Tab.Screen name="Search" component={SearchPage} />
    //     <Tab.Screen name="Chat" component={ChatPage} />
    //     <Tab.Screen name="My" component={MyPage} />
    //   </Tab.Navigator>
    // </NavigationContainer>
    <LogIn />
  );
}

export default Router;