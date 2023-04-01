import { Text, View, StyleSheet, SafeAreaView, StatusBar} from "react-native";

function MangasScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Mangas Screen</Text>
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