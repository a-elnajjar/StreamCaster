/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {React, useState } from 'react';
import type {PropsWithChildren} from 'react';
import CourseCard from './src/CourseCard'; 
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

  const dummyCourseData = [
    {
      courseName: 'Introduction to React',
      subjectDuration: '2 hours 30 minutes',
      courseDescription: 'Learn the basics of React and build your first app.',
    },
    {
      courseName: 'Advanced JavaScript Concepts',
      subjectDuration: '1 hour 45 minutes',
      courseDescription: 'Master advanced JavaScript topics like closures and prototypal inheritance.',
    },
    {
      courseName: 'CSS Fundamentals',
      subjectDuration: '1 hour 15 minutes',
      courseDescription: 'Understand the core concepts of CSS and design responsive layouts.',
    },
    {
      courseName: 'Node.js for Beginners',
      subjectDuration: '3 hours',
      courseDescription: 'Get started with Node.js and build server-side applications.',
    },
    {
      courseName: 'Database Design and SQL',
      subjectDuration: '2 hours 15 minutes',
      courseDescription: 'Learn about database design principles and SQL queries.',
    },
    // Add more dummy course data here
  ];
  

  function goalInputHandler(enteredText:string) {
    setEnteredSearchTermText(enteredText);
  }

  function searchCourseHandler() {
    const filteredCourses = dummyCourseData.filter((course) =>
      course.courseName.toLowerCase().includes(enteredSearchTermText.toLowerCase())
    );
    setCourseList(filteredCourses);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Search course..."
          onChangeText={goalInputHandler}
          value={enteredSearchTermText}
        />
        <Button title="Search" onPress={searchCourseHandler} />
      </View>

      <ScrollView style={styles.courseContainer}>
        <View style={styles.container}>
          {courseList.length > 0 ? (
            courseList.map((course, index) => (
              <CourseCard
                key={index}
                courseName={course.courseName}
                subjectDuration={course.subjectDuration}
                courseDescription={course.courseDescription}
              />
            ))
          ) : (
            <View style={styles.noResultContainer}>
              <Text>No results found.</Text>
            </View>
          )}
        </View>
      </ScrollView>
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
