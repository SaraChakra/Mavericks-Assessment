class Login {   

    Usernamefield = "#loginusername";
    Passwordfield = "#loginpassword";
    Loginfiled = "[onclick='logIn()']";


    LoginUsername(username) { 
        cy.get(this.Usernamefield).type(username);
    }

    LoginPassword(password) {
        cy.get(this.Passwordfield).type(password);
    }

    LoginButton() {
        cy.get(this.Loginfiled).click()
    }

    Verifylogin() {
        cy.get('#logout2').should('be.visible');
    }
    
    
}
export default Login; 