import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import Profile from './components/Profile';
import Settings from './components/Settings';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator<RootParamList>();
export type RootParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

export default function App() {
  return (
<NavigationContainer>
<Tab.Navigator initialRouteName='Home' screenOptions={{
        headerShown: false, 
      }}>
<Tab.Screen name='Home' component={Home} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}/>
<Tab.Screen name='Profile' component={Profile} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }} />
<Tab.Screen name='Settings' component={Settings} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}/>
</Tab.Navigator>
</NavigationContainer>


  );
}

