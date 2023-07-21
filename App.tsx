/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {React, useState } from 'react';
import type {PropsWithChildren} from 'react';
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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';





function App(): JSX.Element {
   const [enteredSearchTermText, setEnteredSearchTermText] = useState('');
  const [courseList, setCourseList] = useState([]);

  function goalInputHandler(enteredText:string) {
    setEnteredSearchTermText(enteredText);
  }

  function searchCourseHandler() {
    setCourseList((currentcourseList) => [...currentcourseList,enteredSearchTermText]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="search course..."
          onChangeText={goalInputHandler}
        />
        <Button title="Search" onPress={searchCourseHandler} />
      </View>
      
      <View style={styles.courseContainer}>
        {/* {courseList.map((goal) => <Text key={goal}>{goal}</Text>)} */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
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
});

export default App;
