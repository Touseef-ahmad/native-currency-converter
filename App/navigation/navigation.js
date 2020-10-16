import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/home';
import { Options } from '../screens/options';
import { CurrencyList } from '../screens/currency-list';

const MainStack = createStackNavigator();

const MainStackScreen = () => (
  <MainStack.Navigator initialRouteName='Home'>
    <MainStack.Screen name='Home' component={Home} options={{ headerShown: false }} />
    <MainStack.Screen name='Options' component={Options} />
    <MainStack.Screen
      name='CurrencyList'
      component={CurrencyList}
      options={({ route }) => ({
        title: route.params.title,
      })}
    />
  </MainStack.Navigator>
);
export const Navigation = () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);
