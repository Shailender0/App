import {
    StyleSheet,
    Text,
    View,
    Alert,
    TextInput, Pressable,

} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    useEffect(() => {
        checkLoggedIn();
    }, []);
    const checkLoggedIn = async () => {
        const token = await AsyncStorage.getItem("token");
        if (token) {
            navigation.navigate("Profile");
        }
    };
    const handleSignIn = async () => {
        if (!email || !password) {
            Alert.alert("Please enter email and password");
            return;
        }

        const body = JSON.stringify({ email, password });

        try {
            const response = await axios.post(
                "http://guardroaster.com/api/login/token",
                body,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log("API Response:", response.data);

            const token = response.data.data.token;

            if (token) {
                await AsyncStorage.setItem("token", token);
                navigation.navigate("Profile", {
                    firstName: response.data.data.first_name,
                    lastName: response.data.data.last_name,
                    email: response.data.data.email,
                    empId: response.data.data.emp_id
                });
            } else {
                throw new Error("Token not received");
            }
        } catch (error) {
            console.error("API Error:", error);
            Alert.alert("Login failed!");
        }
        console.log("Request Body:", body);
    };

    return (
        <View style={styles.container}>
            <View style={styles.heroSection}>
                <View>
                    <Text>Backbutton </Text>
                </View>
                <View style={styles.textSection}>
                    <Text style={styles.text1}>Let's sign you in.</Text>
                    <Text style={styles.text2}>Enter your details to login </Text>
                </View>
            </View>
            <View style={styles.login}>
                <Text style={styles.loginText}>Log In</Text>
                <View style={styles.inputs}>
                    <View>
                        <Text style={styles.inputLable}>UserName</Text>
                        <TextInput
                            style={styles.inputsSection}
                            placeholder="John-101"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                    <View>
                        <Text style={styles.inputLable}>Password</Text>
                        <TextInput
                            style={styles.inputsSection}
                            placeholder="Enter your password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                        />
                    </View>
                </View>
                <View style={styles.inputs2}>
                    <Text>Remember me </Text>
                    <Text style={styles.forget}>Forget password ?</Text>
                </View>
                <View style={styles.signinBtn}>
                    <Text style={styles.signinText} onPress={handleSignIn}>
                        Sign In
                    </Text>
                </View>
                <Pressable onPress={() => navigation.navigate("Home")}>
                    <Text>pppp</Text>
                </Pressable>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        height: "100%",
    },
    heroSection: {
        width: "100%",
        height: 300,
        backgroundColor: "#1f73e9",
    },
    textSection: {
        paddingTop: 150,
    },
    text1: {
        textAlign: "center",
        fontSize: 50,
        paddingBottom: 10,
        color: "#fff",
    },
    text2: {
        textAlign: "center",
        fontSize: 20,
        color: "#fff",
    },
    login: {
        marginHorizontal: 40,
    },
    loginText: {
        color: "#000",
        textAlign: "center",
        fontSize: 50,
        paddingTop: 30,
    },
    inputLable: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputs: {
        marginTop: 20,
    },
    inputsSection: {
        padding: 10,
        height: 45,
        fontSize: 20,
        borderColor: "#EAEAEA",
        borderWidth: 1,
    },
    inputs2: {
        marginVertical: 20,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    forget: {
        color: "#1F74EC",
    },
    signinBtn: {
        backgroundColor: "#1F74EC",
        paddingVertical: 15,
        borderRadius: 200,
    },
    signinText: {
        textAlign: "center",
        color: "#fff",
    },
});
export default Login;

