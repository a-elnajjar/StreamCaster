import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


interface CourseCardProps {
  courseName: string;
  subjectDuration: string;
  courseDescription: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ courseName, subjectDuration, courseDescription }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.courseName}>{courseName}</Text>
      <Text style={styles.subjectDuration}>{subjectDuration}</Text>
      <Text style={styles.courseDescription}>{courseDescription}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  courseName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subjectDuration: {
    fontSize: 16,
    color: 'gray',
    marginTop: 8,
  },
  courseDescription: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default CourseCard;
