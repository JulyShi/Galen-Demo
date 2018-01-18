load("devices.js");
load("env.js");
load("../pages/welcomePage.js");

forAll(devices, function () {
    test("Login Btn size of Welocome page on ${deviceName}", function (device){
        var driver = setEnv(device);

        var welcomepage = new welcomePage(driver);
        if (!welcomepage.loginButton.exists()){
            console.log("loginButton element don't exist")
        }

        checkLayout(driver, "specs/welcomePage.gspec", [device.tags]);
        driver.quit();
    });

});

forOnly(devices.desktop, function () {
    test("Login Btn color of Welocome page on desktop", function (device){
        var driver = setEnv(device);

        var welcomepage = new welcomePage(driver);
        logged("Checking color for login btn", function () {
            checkLayout(driver, "specs/welcomePage.gspec", ["usual"]);
        });

        logged("Checking color for highlighted login btn", function () {
            welcomepage.hoverLoginButton();
            checkLayout(driver, "specs/welcomePage.gspec", ["hovered"]);
        });

        driver.quit();
    });

});

//
// forAll(operatingSystems, function () {
//     forAll(browsers, function () {
//         test("Test on ", function (os, browser) {
//             // some test code
//         });
//     });
// });