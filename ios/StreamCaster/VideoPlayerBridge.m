//
//  VideoPlayerBridge.m
//  StreamCaster
//
//  Created by Abdalla Elnajjar on 2023-07-25.
//

#import <Foundation/Foundation.h>
#import "VideoPlayerBridge.h"
#import <React/RCTBridgeModule.h>
#import <AVKit/AVKit.h>
#import <AVFoundation/AVFoundation.h>
#import "VideoPlayerViewController.h"

@implementation VideoPlayerBridge

RCT_EXPORT_MODULE(VideoPlayerBridge)

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(renderVideoFromUrl: (NSString *)urlString) {
  // Create an NSURL object from the provided string
  NSURL *url = [NSURL URLWithString:urlString];
  // Initialize the AVPlayer with the url
  AVPlayer *player = [[AVPlayer alloc] initWithURL:url];
  // Check if the url is a valid video link
  BOOL isPlayable = [[AVAsset assetWithURL:url] isPlayable];
  if(!isPlayable){
    return @(NO);
  }
  // Dispatch the following code asynchronously on the main queue
  dispatch_async(dispatch_get_main_queue(), ^{
    // Create the custom VideoPlayerViewController
    VideoPlayerViewController *viewController = [[VideoPlayerViewController alloc] init];
    // Set the AVPlayer for the controller
    viewController.player = player;
    // Set some settings like volume, playback controls visibility, and video gravity
    viewController.player.volume = 1;
    viewController.showsPlaybackControls = YES;
    viewController.videoGravity = AVLayerVideoGravityResizeAspect;
    
    // Get the key window and the root ViewController for the application
    UIWindow *window = [[UIApplication sharedApplication] keyWindow];
    UIViewController *rootViewController = window.rootViewController;
    // Present the VideoPlayerViewController modally
    [rootViewController presentViewController:viewController animated:true completion:^{
      [player play];
    }];
  });
  // Return the original urlString
  return urlString;
}

@end
