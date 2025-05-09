class Login {   

    Usernamefield = "#loginusername";
    Passwordfield = "#loginpassword";
    Loginfiled = "[onclick='logIn()']";


    Loginlink(){
        cy.get('#login2').click();
    }

    LoginUsername(username) {  
        cy.get(this.Usernamefield).wait(1000).type(username,{log:false}).invoke ('attr','type','password');
    }

    LoginPassword(password) {
      cy.get(this.Passwordfield).wait(1000).type(password,{log:false}).invoke ('attr','type','password');
  }

    LoginButton() {
        cy.get(this.Loginfiled).click();
    }

    Verifylogin() {
        cy.get('#logout2').should('be.visible');
    }
    
    
}
export default Login; 