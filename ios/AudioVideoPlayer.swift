//
//  AudioVideoPlayer.swift
//  StreamCaster
//
//  Created by Abdalla Elnajjar on 2023-07-21.
//

import Foundation
import AVKit
import AVFoundation

@objc(AudioVideoPlayer)
class AudioVideoPlayer :NSObject {
  static func moduleName() -> String! {
    return "VideoPlayerBridge"
  }
  
  @objc func renderVideo(urlString: String) -> Bool {
    // Create an NSURL object from the provided string
    guard let url = URL(string: urlString) else {
      return false
    }
    
    // Initialize the AVPlayer with the url
    let player = AVPlayer(url: url)
    
    // Check if the url is a valid video link
    let isPlayable = AVAsset(url: url).isPlayable
    if !isPlayable {
      return false
    }
    
    // Dispatch the following code asynchronously on the main queue
    DispatchQueue.main.async {
      // Create the AVPlayerViewController
      let viewController = AVPlayerViewController()
      
      // Set the AVPlayer for the controller
      viewController.player = player
      
      // Set some settings like volume, playback controls visibility, and video gravity
      viewController.player?.volume = 1
      viewController.showsPlaybackControls = true
      viewController.videoGravity = AVLayerVideoGravity.resizeAspect
      
      // Get the key window and the root ViewController for the application
      guard let window = UIApplication.shared.keyWindow,
            let rootViewController = window.rootViewController else {
        return
      }
      
      // Present the AVPlayer modally
      rootViewController.present(viewController, animated: true) {
        player.play()
      }
    }
    
    // Return the original urlString
    return true
  }
}
