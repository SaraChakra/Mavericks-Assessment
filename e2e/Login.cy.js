import Login from "../e2e/Page Object/Logindata"

describe('Loginscenario', () => {
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/'); 
    })
    it.only('SuccessfulLogin', () => {
        cy.get('#login2').click();
        cy.fixture('Login').then((data) => {
           const ln=new Login();
            ln.LoginUsername(data.Data1.username)
            ln.LoginPassword(data.Data1.password)
            ln.LoginButton();
            ln.Verifylogin();
        })   
       })

    it.only('UnsuccessfulLogin', () => {
        cy.get('#login2').click();
        cy.fixture('Login').then((data) => {
            const ln = new Login();
            ln.LoginUsername(data.Data2.username)
            ln.LoginPassword(data.Data2.password)
            ln.LoginButton();
            cy.on('window:alert', (t) => {
                expect(t).to.contains('Wrong password.');
            })
        })
      
    })

        

    
})