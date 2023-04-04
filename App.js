import BottomTabsNavigator from './src/navigation/BottonTabsNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './store/store'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabsNavigator/>
      </NavigationContainer>
    </Provider>
  );
}