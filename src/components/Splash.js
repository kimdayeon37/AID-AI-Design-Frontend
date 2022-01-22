import * as React from 'react';
import { WebView } from 'react-native-webview';
import * as SplashScreen from 'expo-splash-screen';

function sleep (ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}

async function delay_splash() {
    await SplashScreen.preventAutoHideAsync();
    await sleep(2000);
    await SplashScreen.hideAsync();    
};