import * as React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import LogoSvg from '../media/logo2_svg';

function HomePage() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <LogoSvg />
            </View>
            <View style={styles.content}>
                <Text>good</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff'
    },
    header:{
        flex:1,
        justifyContent: 'flex-end',
        borderColor:'#CACACA',
        borderBottomWidth:1
    },
    content:{
        flex:6.6,
        alignItems: 'center'
    }
})

export default HomePage;