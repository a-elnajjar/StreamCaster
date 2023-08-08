import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './AppNavigator'; // Assuming your stack param list is defined in AppNavigator

type CourseDetailScreenRouteProp = RouteProp<RootStackParamList, 'CourseDetail'>;
type CourseDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CourseDetail'>;

interface CourseDetailScreenProps {
  route: CourseDetailScreenRouteProp;
  navigation: CourseDetailScreenNavigationProp;
}

const CourseDetailScreen: React.FC<CourseDetailScreenProps> = ({ route }) => {
  const { courseName, courseDescription } = route.params;

  return (
    <View>
      <Text>{courseName}</Text>
      <Text>{courseDescription}</Text>
      {/* Add more course detail content here */}
    </View>
  );
};

export default CourseDetailScreen;
