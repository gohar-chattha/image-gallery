import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ApiProvider from '../api/ApiProvider';
import GalleryScreen from '../screens/Gallery/GalleryScreen';
import {Provider} from 'react-redux/es/exports';
import {store} from '../store';

type GalleryStackNavigatorProps = {
  Gallery: undefined;
};
const GalleryStackNavigator =
  createStackNavigator<GalleryStackNavigatorProps>();
export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ApiProvider>
          <NavigationContainer>
            <GalleryStackNavigator.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              <GalleryStackNavigator.Screen
                name="Gallery"
                component={GalleryScreen}
              />
            </GalleryStackNavigator.Navigator>
          </NavigationContainer>
        </ApiProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
