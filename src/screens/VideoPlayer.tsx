import { NativeModules } from 'react-native';

const { VideoPlayerBridge } = NativeModules;

export const renderVideoFromUrl = (urlString:string) => {
    return VideoPlayerBridge.renderVideo(urlString);
  };