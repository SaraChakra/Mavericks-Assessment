import Login from "../e2e/Page Object/Logindata"

describe('Loginscenario', () => {
    beforeEach(() => { 
             cy.visitBase(); 
    })
      const ln=new Login(); 
    it('SuccessfulLogin', () => {
       //using POM- 'Login.data.js' file  
             ln.Loginlink();  
       //Used cypress.env.json to pass data for username and password           
          ln.LoginUsername(Cypress.env('successusername'));
          ln.LoginPassword(Cypress.env('successpassword'));
           ln.LoginButton();
            ln.Verifylogin();
            cy.takeScreenshot("Login Success");
               }) 
        
               
//Verifying the Incorrect password error message
   it('UnsuccessfulLogin', () => {
            ln.Loginlink();     
          ln.LoginUsername(Cypress.env('incorrectusername'));
          ln.LoginPassword(Cypress.env('incorrectpassword'));
           ln.LoginButton();
            //Verifying the alert window error message 
            cy.on('window:alert', (t) => {
               expect(t).to.contains('Wrong password.');
             })
             cy.takeScreenshot("Wrong pwd error");
        })


        //Verifying the non-existing credentials
   it('NonexistingLogin', () => {
            ln.Loginlink();     
          ln.LoginUsername(Cypress.env('Notexistusername'));
          ln.LoginPassword(Cypress.env('Notexistpassword'));
           ln.LoginButton();
            //Verifying the alert window error message 
            cy.on('window:alert', (t) => {
               expect(t).to.contains('User does not exist.');
            })
            cy.takeScreenshot("User non-exist error");
        })


        //Verifying Blank username and password error message
        it('EmptyLogin', () => {       
            ln.Loginlink();
            ln.LoginButton();
            //Verifying the alert window error message
            cy.on('window:alert', (t) => {
                expect(t).to.contains('Please fill out Username and Password.');   
            })
        })
      
    })

        
    
    
