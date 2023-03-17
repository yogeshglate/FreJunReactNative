#import "RCTDeviceIDModule.h"

@implementation RCTDeviceIDModule

// To export a module named DeviceIDModule
RCT_EXPORT_MODULE(DeviceIDModule);

RCT_EXPORT_METHOD(getPhoneID:(RCTPromiseResolveBlock)resolve :(RCTPromiseRejectBlock)reject)
{
//  NSUUID *deviceID = [[UIDevice currentDevice] identifierForVendor];
  NSString *deviceName = [[UIDevice currentDevice] name];
  resolve(deviceName);
}
@end
