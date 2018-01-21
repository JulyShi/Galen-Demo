load("devices.js");
load("event.js");
load("../pages/welcomePage.js");

forAll(devices, function () {
    test("Login Btn size of Welocome page on ${deviceName}", function (device){


        var driver = session.get("driver");
        resize(driver, device.size);

        var welcomepage = new welcomePage(driver);
        if (!welcomepage.loginButton.exists()){
            console.log("loginButton element don't exist")
        }

        checkLayout(driver, "specs/welcomePage.gspec", [device.tags]);
    });

});

forOnly(devices.desktop, function () {
    test("Login Btn color of Welocome page on desktop", function (device){


        var driver = session.get("driver");
        resize(driver, device.size);

        var welcomepage = new welcomePage(driver);
        logged("Checking color for login btn", function () {
            checkLayout(driver, "specs/welcomePage.gspec", ["usual"]);
        });

        logged("Checking color for highlighted login btn", function () {
            welcomepage.hoverLoginButton();
            checkLayout(driver, "specs/welcomePage.gspec", ["hovered"]);
        });

    });

});
