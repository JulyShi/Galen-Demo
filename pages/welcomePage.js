//importClass(org.openqa.selenium.interactions.Actions);

this.welcomePage = $page("welcome", {
    loginButton: "#welcome-page .button-login",

    hoverLoginButton: loggedFunction ("Hover login button", function (){
        var actions = new Actions(this.driver);
        actions.moveToElement(this.findChild("xpath: //*[contains(@class, 'button-login')]")).perform();
    })
});





