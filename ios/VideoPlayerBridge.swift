//
//  VideoPlayerBridge.swift
//  StreamCaster
//
//  Created by Abdalla Elnajjar on 2023-07-26.
//

import Foundation
import UIKit
import AVKit
import AVFoundation

@objc(VideoPlayerBridge)
class VideoPlayerBridge: NSObject {
    static func moduleName() -> String! {
        return "VideoPlayerBridge"
    }

    @objc(renderVideoFromUrl:)
    public func renderVideoFromUrl(_ urlString: String) -> String {
        // Create an NSURL object from the provided string
        guard let url = URL(string: urlString) else {
            return urlString
        }

        // Initialize the AVPlayer with the url
        let player = AVPlayer(url: url)

        // Check if the url is a valid video link
        let isPlayable = AVAsset(url: url).isPlayable
        if !isPlayable {
            return urlString
        }

        // Dispatch the following code asynchronously on the main queue
        DispatchQueue.main.async {
            // Create the custom VideoPlayerViewController
            let viewController = VideoPlayerViewController()
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

            // Present the VideoPlayerViewController modally
            rootViewController.present(viewController, animated: true) {
                player.play()
            }
        }
        // Return the original urlString
        return urlString
    }
}

