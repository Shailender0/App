import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Profile = ({ route }) => {
    const { firstName, lastName, email, empId } = route.params || {};
    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.profile}>
                <View style={styles.profileInfo}>

                    <View style={styles.userName}>
                        <View>
                            <Text style={styles.Fname}>{firstName}</Text>
                        </View>
                        <View>
                            <Text style={styles.Lname}>{lastName} | {empId}</Text>
                            <Text style={styles.Lname}>{email}</Text>
                        </View>
                        <Pressable onPress={() => navigation.navigate("Home")}>
                            <Text >Home</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    profile: {
        height: 180,
        backgroundColor: "#1F74EC",
    },
    profileInfo: {
        marginVertical: "15%",
        marginHorizontal: "10%",
        flexDirection: "row",
    },
    ProfileImg: {
        height: 80,
        width: 80,
        borderRadius: 50,
        borderColor: "#fff",
        borderWidth: 2,
        resizeMode: "cover",
    },
    Fname: {
        marginHorizontal: 20,
        fontSize: 35,
        color: "#fff",
    },
    Lname: {
        marginHorizontal: 20,
        fontSize: 20,
        color: "#fff",
    },
});

export default Profile;