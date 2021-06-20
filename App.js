import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EcommerceApp from './screens/Ecommerce';
import Cart from './screens/Cart';
import CheckOut from './screens/Checkout';

// Import Redux
import store from './redux/store';
import { Provider } from 'react-redux';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={EcommerceApp} />
        <Stack.Screen name="Cart" component={Cart} options={{ title: 'Carrito' }} />
        <Stack.Screen name="CheckOut" component={CheckOut} options={{ title: 'CheckOut' }} />
      </Stack.Navigator>
      </Provider>

    </NavigationContainer>
  );
}

export default App;

