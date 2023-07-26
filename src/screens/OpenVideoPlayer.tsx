import React from 'react';
import { View, Button,NativeModules } from 'react-native';


const { VideoPlayerBridge } = NativeModules;

export const renderVideoFromUrl = (urlString) => {
  return VideoPlayerBridge.renderVideo(urlString);
};

export const OpenVideoPlayer = () => {
  const handlePlayVideo = async () => {
    try {
      const videoUrl = 'YOUR_VIDEO_URL'; // Replace this with the actual video URL
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