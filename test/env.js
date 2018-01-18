load("devices.js");
//load("broswers.js");

var url = "http://testapp.galenframework.com/";
var browser = "chrome";

function setEnv(device) {
    return driver = createDriver(url,
        device.size,
        browser);
}
