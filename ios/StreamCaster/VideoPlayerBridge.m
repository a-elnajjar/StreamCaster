//
//  VideoPlayerBridge.m
//  StreamCaster
//
//  Created by Abdalla Elnajjar on 2023-07-26.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(VideoPlayerBridge, NSObject)
  
  RCT_EXTERN_METHOD(renderVideoFromUrl: (NSString *) urlString)
@end
