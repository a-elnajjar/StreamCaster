import React, { useState } from 'react';
import { View, TextInput, Button, ScrollView, StyleSheet, Text,FlatList } from 'react-native';
import CourseCard from './CourseCard';
import { renderVideoFromUrl } from './VideoPlayer';

const HomeScreen = () => {
  const [enteredSearchTermText, setEnteredSearchTermText] = useState('');
  const [courseList, setCourseList] = useState(dummyCourseData);

  const dummyCourseData = [
    {
      courseName: 'Introduction to React',
      subjectDuration: '2 hours 30 minutes',
      courseDescription: 'Learn the basics of React and build your first app.',
      episodes: [
        { episodeTitle: 'Getting Started with React', duration: '45 minutes' },
        { episodeTitle: 'Components and Props', duration: '1 hour' },
        { episodeTitle: 'State and Lifecycle', duration: '45 minutes' }
        // ... other episodes
      ]
    },
    {
      courseName: 'Advanced JavaScript Concepts',
      subjectDuration: '1 hour 45 minutes',
      courseDescription: 'Master advanced JavaScript topics like closures and prototypal inheritance.',
      episodes: [
        { episodeTitle: 'Closures in Depth', duration: '30 minutes' },
        { episodeTitle: 'Prototypal Inheritance', duration: '1 hour 15 minutes' },
        // ... other episodes
      ]
    },
    {
      courseName: 'CSS Fundamentals',
      subjectDuration: '1 hour 15 minutes',
      courseDescription: 'Understand the core concepts of CSS and design responsive layouts.',
      episodes: [
        { episodeTitle: 'Introduction to CSS', duration: '30 minutes' },
        { episodeTitle: 'Selectors and Styles', duration: '45 minutes' },
        // ... other episodes
      ]
    },
    // ... other courses
  ];
  

  function goalInputHandler(enteredText) {
    setEnteredSearchTermText(enteredText);
  }

  function searchCourseHandler() {
    const filteredCourses = dummyCourseData.filter((course) =>
      course.courseName.toLowerCase().includes(enteredSearchTermText.toLowerCase())
    );
    setCourseList(filteredCourses);
  }

  return (
    <View style={styles.homeContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Search course..."
          onChangeText={goalInputHandler}
          value={enteredSearchTermText}
        />
        <Button title="Search" onPress={searchCourseHandler} />
      </View>


      {courseList && courseList.length > 0 ? (
        <FlatList
          style={styles.courseContainer}
          data={courseList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <CourseCard
              courseName={item.courseName}
              subjectDuration={item.subjectDuration}
              courseDescription={item.courseDescription}
            />
          )}
        />
      ) : (
        <View style={styles.noResultContainer}>
          <Text>No results found.</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
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

export default HomeScreen;