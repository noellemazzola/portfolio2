import React from "react";
import {TextInput, StyleSheet, Text, Pressable } from "react-native";


export default function logIn(props) {
    let [loggedIn, setLoggedIn] = useState(false)
    let [password, setPassword] = useState("")
    let [username, setUsername] = useState("")
    let [error, setError] = useState(false)
    let doLogIn = useCallback(() => {
        if(password === "mOBiLE-dEV") {
            setLoggedIn(true)
        } else {
            setError(true)
        }
    })

    return !loggedIn ?
        <>
            <Text style= {styles.welcome}>Please log in</Text>
            <TextInput value={username} onChangeText={text => setPassword(text)} placeholder="Username" style={styles.textInput}></TextInput>
            <TextInput value= {password} onChangeText= {text => setPassword(text)} secureTextEntry= {true} placeholder="Password" style={styles.textInput}></TextInput>
            <Text style={styles.error}>{error ? "Whoops! Wrong Password!" : ""}</Text>
            <Pressable style={styles.button} onPress={() => doLogin()}>
                <Text style={styles.text}></Text>
            </Pressable>
        </>
        : <Text>Welcome, {username}</Text>

}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },

    error: {
        color: 'red',
        paddingVertical: 8,
    },

    welcome: {
        fontSize: 24,
        lineHeight: 21,

    },

    text: {
        fontSize: 16,
        lineHeight: 21,
        lineWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },

    textInput: {
        fontSize: 28,
        width: 200,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
        padding: 5,
        margin: 5,
    },
});