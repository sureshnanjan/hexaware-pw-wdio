import {remote} from 'webdriverio';
//const remote = require("webdriverio")
(async () => {
  const caps = {
    "appium:udid": "emulator-5554",
    "appium:automationName": "UIAutomator2",
    "platformName": "Android",
    "appium:platformVersion": "13.0",
    "appium:app": "C:\\Trainings-2021\\Vendors\\IIHT\\Hexaware\\webdriverio-appium-course\\app\\android\\ApiDemos-debug.apk",
    "appium:ensureWebviewsHavePages": true,
    "appium:nativeWebScreenshot": true,
    "appium:newCommandTimeout": 3600,
    "appium:connectHardwareKeyboard": true
  }
  const driver = await remote({
    protocol: "http",
    hostname: "127.0.0.1",
    port: 4723,
    path: "/",
    capabilities: caps
  });
  console.log(`Checking whether Androd Device : ${driver.isAndroid}`);
  await driver.deleteSession();

})().catch((e) => console.error(e));
