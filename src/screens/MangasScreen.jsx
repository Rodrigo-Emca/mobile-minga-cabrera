import { ScrollView, StyleSheet, SafeAreaView, StatusBar} from "react-native";
import { Provider } from 'react-redux';  
import { store } from '../../store/store'
import MangasAll from "../components/MangasAll";

export default function MangasScreen() {
    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <MangasAll/>
                </ScrollView>
            </SafeAreaView>
        </Provider>
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