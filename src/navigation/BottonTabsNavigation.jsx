import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import MangasScreen from "../screens/MangasScreen";

const Tab = createMaterialBottomTabNavigator();

function BottomTabsNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Mangas' component={MangasScreen} />
        </Tab.Navigator>
    )
}

export default BottomTabsNavigator