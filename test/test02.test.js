load("../pages/welcomePage.js");

//不同分辨率测试
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
    test("Login Btn size of Welocome page on ${deviceName}", function (device){
        var driver = createDriver("http://testapp.galenframework.com/",
            device.size,
            "chrome");

        //测试中引用pageObject
        var welcomepage = new welcomePage(driver);
        if (!welcomepage.loginButton.exists()){
            console.log("loginButton element don't exist")
        }

        checkLayout(driver, "specs/welcomePage.gspec", [device.tags]); //Layout检查
        driver.quit(); //添加关闭浏览器
    });

});

forOnly(devices.desktop, function () {
    test("Login Btn color of Welocome page on desktop", function (device){
        var driver = createDriver("http://testapp.galenframework.com/",
            device.size,
            "chrome");

        //测试中引用pageObject
        var welcomepage = new welcomePage(driver);
        logged("Checking color for login btn", function () {
            checkLayout(driver, "specs/welcomePage.gspec", ["usual"]);
        });

        logged("Checking color for highlighted login btn", function () {
            welcomepage.hoverLoginButton();
            checkLayout(driver, "specs/welcomePage.gspec", ["hovered"]);
        });

        driver.quit(); //添加关闭浏览器
    });

});
