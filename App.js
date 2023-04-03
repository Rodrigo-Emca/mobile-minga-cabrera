import BottomTabsNavigator from './src/navigation/BottonTabsNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabsNavigator/>
    </NavigationContainer>
  );
}