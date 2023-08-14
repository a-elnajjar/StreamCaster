/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {React, useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {AppState,StyleSheet,View,NativeModule, NativeModules} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import DownloadScreen from './src/screens/DownloadScreen';
import CourseCard from './src/screens/CourseCard';

const Tab = createBottomTabNavigator();

function App() {
  const [isAppActive, setAppActive] = useState(true);
  const [isBlurred, setBlurred] = useState(false);

  useEffect(() => {
    const handleAppStateChange = nextAppState => {
      setAppActive(nextAppState === 'active');
      setBlurred(nextAppState !== 'active');
    };

    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Download" component={DownloadScreen} />
      </Tab.Navigator>
      {isBlurred && <View style={styles.blurOverlay} />}
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
  blurOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 100,
  },
});

export default App;
