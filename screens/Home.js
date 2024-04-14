import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();

    return (
        <View>

            <Pressable onPress={() => navigation.navigate("Login")}>
                <Text style={styles.log}>Login</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    log: {
        paddingTop: 80,
        fontSize: 35,

    },
})

export default Home;
