import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './screens/Register';
import { DataProvider } from './context/DataContext';
import Checkout from './screens/Checkout';
import Address from './screens/Address';
import Login from './screens/Login';
import Pickups from './screens/Pickups';

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='Checkout' component={Checkout} 
          options={{ 
            headerStyle: {
              backgroundColor: '#539165',
            },
            headerTitleStyle: {
              color: '#fff',
            },
            headerTintColor:'#fff',
          }}/>
          <Stack.Screen name='Address' component={Address} 
          options={{ 
            headerStyle: {
              backgroundColor: '#539165',
            },
            headerTitleStyle: {
              color: '#fff',
            },
            headerTintColor:'#fff',
          }}/>
          <Stack.Screen name='Register' component={Register} 
          options={{ 
            headerStyle: {
              backgroundColor: '#539165',
            },
            headerTitleStyle: {
              color: '#fff',
            },
            headerTintColor:'#fff',
          }}/>
          <Stack.Screen name='Login' component={Login} 
          options={{ 
            headerStyle: {
              backgroundColor: '#539165',
            },
            headerTitleStyle: {
              color: '#fff',
            },
            headerTintColor:'#fff',
          }}/>
          <Stack.Screen name='Pickups' component={Pickups} 
          options={{ 
            headerStyle: {
              backgroundColor: '#539165',
            },
            headerTitleStyle: {
              color: '#fff',
            },
            headerTintColor:'#fff',
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}
