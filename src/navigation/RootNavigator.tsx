import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ApiProvider from '../api/ApiProvider';
import GalleryScreen from '../screens/Gallery/GalleryScreen';

type GalleryStackNavigatorProps = {
  Gallery: undefined;
};
const GalleryStackNavigator =
  createStackNavigator<GalleryStackNavigatorProps>();
export default function App() {
  return (
    <SafeAreaProvider>
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
    </SafeAreaProvider>
  );
}
