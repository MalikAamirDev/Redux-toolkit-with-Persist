import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import CounterScreen from '../screens/CounterScreen';
import CartScreen from '../screens/CartScreen';
import SingleProduct from '../screens/SingleProduct';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  // const userData = false;
  const {userData} = useSelector(state => state.auth);
  console.log(
    '🚀 ~ file: AppNavigation.js:17 ~ AppNavigation ~ userData:',
    userData,
  );
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {userData ? (
          <Stack.Group>
            <Stack.Screen name="root" component={TabNavigation} />
            <Stack.Screen name="SingleProduct" component={SingleProduct} />
            <Stack.Screen name="Cart" component={CartScreen} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="CounterScreen" component={CounterScreen} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
