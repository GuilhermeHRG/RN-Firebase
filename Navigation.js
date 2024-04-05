// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginHome from './assets/components/Home/Home';
import LoginPage from './assets/components/Login/Login';
import CadastroPage from './assets/components/Cadastro/Cadastro';
import ChatScreen from './assets/components/Chat/ChatScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginHome" >
        <Stack.Screen name="Home" component={LoginHome} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="CadastroPage" component={CadastroPage} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
