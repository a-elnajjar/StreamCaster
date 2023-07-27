import React from 'react';
import { View, Button,NativeModules } from 'react-native';


const { VideoPlayerBridge } = NativeModules;

export const renderVideoFromUrl = (urlString) => {
  return VideoPlayerBridge.renderVideoFromUrl(urlString)
};

export const OpenVideoPlayer = () => {
  const handlePlayVideo = async () => {
    try {
      const videoUrl = 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'; // Replace this with the actual video URL
      const result = await renderVideoFromUrl(videoUrl);
      console.log('Video URL:', result);
    } catch (error) {
      console.error('Error playing video:', error);
    }
  };

  return (
    <View>
      <Button title="Play Video" onPress={handlePlayVideo} />
    </View>
  );
};

export default OpenVideoPlayer;