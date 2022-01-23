import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';

import HomePage from "./src/components/HomePage"
import SearchPage from "./src/components/SearchPage"
import ChatPage from "./src/components/ChatPage"
import MyPage from "./src/components/MyPage"
import SignUp from './src/components/SignUp';
import LogIn from './src/components/LogIn';
import Home_Icon from './src/media/home_icon';
import Search_Icon from './src/media/search_icon';
import Chat_Icon from './src/media/chat_icon';
import Mypage_Icon from './src/media/mypage_icon';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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

function AppStack() {
  delay_splash();
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="LogIn" screenOptions={{headerShown: false}}>
        <Stack.Screen name="LogIn" component={LogIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="Main" component={MainTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


function MainTab() {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown: false, tabBarShowLabel:false, tabBarVisible: false}}
    >
      <Tab.Screen name="Home" component={HomePage} options={{tabBarIcon: ()=>{ return <Home_Icon />}}} BottomTabNavigationOptions={} />
      <Tab.Screen name="Search" component={SearchPage} options={{tabBarIcon: ()=>{ return <Search_Icon />}}} />
      <Tab.Screen name="Chat" component={ChatPage} options={{tabBarIcon: ()=>{ return <Chat_Icon />}}} />
      <Tab.Screen name="My" component={MyPage} options={{tabBarIcon: ()=>{ return <Mypage_Icon />}}} />
    </Tab.Navigator>
  );
}


export default AppStack;