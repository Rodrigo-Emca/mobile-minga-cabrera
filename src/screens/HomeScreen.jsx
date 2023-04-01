import { StyleSheet, ScrollView, SafeAreaView, StatusBar } from "react-native";
import Hero from "../components/Hero";
import SignIn from "../components/SignIn";

function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView  style={styles.scrollView}>
                <Hero/>
                <SignIn/>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        paddingTop: StatusBar.currentHeight,
        // alignItems: 'center', 
        // justifyContent: 'center' 
    },
    scrollView: {
        // height: 800,
        // borderWidth: 5,
    },
    text: {
        textAlign: 'center',
        height: 900,
        color: 'white'
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%'
        },
})

export default HomeScreen