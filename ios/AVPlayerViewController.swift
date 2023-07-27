//
//  AVPlayerViewController.swift
//  StreamCaster
//
//  Created by Abdalla Elnajjar on 2023-07-26.
//

import UIKit
import AVKit

class VideoPlayerViewController: AVPlayerViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
  override var supportedInterfaceOrientations: UIInterfaceOrientationMask {
       return .landscape
   }
    
}
