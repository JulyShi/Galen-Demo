function Device(deviceName, size, tags) {
    this.deviceName = deviceName;
    this.size = size;
    this.tags = tags;
}

this.devices = {
    mobile:  new Device("mobile", "450x700", ["mobile"]),
    tablet:  new Device("tablet", "600x800", ["tablet"]),
    desktop: new Device("desktop", "1024x768", ["desktop"])
};

forAll(devices, function () {
    test("Welocome page on ${deviceName}", function (device){
        var driver = createDriver("http://testapp.galenframework.com/",
            device.size,
            "chrome");

        checkLayout(driver, "specs/welcomePage.gspec", [device.tags]); //Layout检查
        driver.quit(); //添加关闭浏览器
    });
});