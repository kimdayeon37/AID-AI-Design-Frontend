import * as React from 'react';
import { Text, View, Button,StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import LogoSvg from '../media/logo_svg';

function LogIn() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.navi}>로그인</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.logo}>
                    <LogoSvg />
                </View>
                <View style={styles.login}>
                    <TextInput style={styles.getId} placeholder="아이디를 입력해주세요" placeholderTextColor={'#999999'}/>
                    <TextInput style={styles.getPw} placeholder="비밀번호를 입력해주세요" placeholderTextColor={'#999999'} secureTextEntry={true}/>
                    <Forgot_Btn />
                    <LogIn_Btn />
                </View>
                <View style={styles.signin}>
                    
                    <View style={styles.line}></View>
                    
                </View>
            </View>
            <View style={styles.footer}>
                <SignIn_Btn />
            </View>
        </View>
    );
}

const LogIn_Btn = ({onPress}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={onPress}>
                <Text style={styles.buttonText}>로그인</Text>
            </TouchableOpacity>
        </View>
    );
};

const Forgot_Btn = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.Forgot_Btn} activeOpacity={0.6} onPress={onPress}>
            <Text style={styles.ForgotText}>아이디/비밀번호 찾기</Text>
        </TouchableOpacity>
    );
};

const SignIn_Btn = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.SignIn_Btn} activeOpacity={0.6} onPress={onPress}>
            <Text style={styles.nothing}>아직 회원이 아닌가요?  </Text><Text style={styles.SignInText}>회원가입&gt;</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        flex:1,
        justifyContent: 'flex-end'
    },
    navi:{
        fontSize:20,
        marginBottom:30,
        marginLeft:24
    },
    content:{
        flex:5.7,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius:80,
        borderBottomRightRadius:80
    },
    logo: {
        flex: 1,
        paddingTop:48
    },
    login:{
        flex: 2.3,
        justifyContent:"flex-start"

    },
    getId:{
        width:315,
        height:54,
        padding:19,
        fontSize:14,
        color:'#111111',
        borderRadius:18,
        backgroundColor:'#fff',

        shadowColor: "#000",
        shadowOffset: {
	        width: 6,
	        height: 8,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10
    },
    getPw:{
        marginTop:9,
        width:315,
        height:54,
        padding:19,
        fontSize:14,
        color:'#111111',
        borderRadius:18,
        backgroundColor:'#fff',

        shadowColor: "#000",
        shadowOffset: {
	        width: 6,
	        height: 8,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10
    },
    button:{
        width:315,
        height:54,
        backgroundColor:'#04AA8C',
        borderRadius:18,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold'
    },
    Forgot_Btn:{
        alignItems: "flex-end",
        marginBottom:25,
        marginTop:22
    },
    ForgotText:{
        fontSize:12,
        color:'#999999',
        textDecorationLine: 'underline'

    },
    line:{
        width:250, 
        borderColor:'#EAEAEA' ,
        borderTopWidth:1, 
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:45
    },
    signin:{
        flex: 1.8
    },
    SignIn_Btn:{
        flexDirection:'row'
    },
    SignInText:{
        fontSize:12,
        color:'#fff',
        fontWeight:'bold'
    },
    nothing:{
        fontSize:12,
        color:'#fff'
    },
    footer:{
        flex:1.07,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#04AA8C'
    }
    
});

export default LogIn;