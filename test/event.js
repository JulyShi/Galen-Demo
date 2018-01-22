beforeTest(function () {
    // here goes the code
    var driver = createDriver("http://testapp.galenframework.com/",
        "1024x768",
        "chrome");
    session.put("driver", driver);
});


afterTest(function () {
    var driver = session.get("driver");
    driver.quit();
});