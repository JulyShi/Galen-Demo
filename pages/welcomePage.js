//importClass(org.openqa.selenium.interactions.Actions);

this.welcomePage = $page("welcome Page", {
    loginButton: "#welcome-page .button-login",

    hoverLoginButton: loggedFunction ("Hover login button", function (){
        this.loginButton.hover();
    }),

    clickLogin: function(){
        this.submitButton.click();
    }
});





