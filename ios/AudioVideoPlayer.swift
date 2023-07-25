//
//  AudioVideoPlayer.swift
//  StreamCaster
//
//  Created by Abdalla Elnajjar on 2023-07-21.
//

import Foundation

@objc(AudioVideoPlayer)
class AudioVideoPlayer :NSObject {
  private var count = 0
  
  @objc
  func increment(_ callback:RCTResponseSenderBlock){
    count += 1
    callback([count])
  }
  
  
  @objc  static func requiresMainQueueSetup() -> Bool {
      return true
  }
  
  @objc func constantToExport() -> [String:Any]!{
    return ["initialCount":0];
  }

}
