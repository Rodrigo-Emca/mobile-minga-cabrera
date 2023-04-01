import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import MangasScreen from "../screens/MangasScreen";

const Tab = createMaterialBottomTabNavigator();

function BottomTabsNavigator() {
    return (
        <Tab.Navigator  initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: 'pink' }}>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Mangas' component={MangasScreen} />
        </Tab.Navigator>
    )
}

export default BottomTabsNavigator