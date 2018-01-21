beforeTest(function () {
    // here goes the code
    var driver = createDriver("http://testapp.galenframework.com/",
        //  device.size,
        "1024x768",
        "chrome");
    session.put("driver", driver);
});


afterTest(function () {
    // here goes the code
    var driver = session.get("driver");
    driver.quit();
});