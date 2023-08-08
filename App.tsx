/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {React, useState } from 'react';
import type {PropsWithChildren} from 'react';
import CourseCard from './src/screens/CourseCard'; 
import { NativeModule, NativeModules } from 'react-native';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import  HomeScreen from './src/screens/HomeScreen';
import  DownloadScreen from './src/screens/DownloadScreen';
import CourseDetailScreen from './src/screens/CourseDetailScreen';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function App(): JSX.Element {
  
  return (

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Download" component={DownloadScreen} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}



const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  courseContainer: {
    flex: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 20,
  },
  noResultContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
});

export default App;
