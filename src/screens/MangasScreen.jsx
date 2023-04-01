import { View, StyleSheet, SafeAreaView, StatusBar} from "react-native";
import SignUp from "../components/SignUp";

function MangasScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <SignUp/>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        paddingTop: StatusBar.currentHeight,
        alignItems: 'center', 
        justifyContent: 'center',
    }
})
export default MangasScreen