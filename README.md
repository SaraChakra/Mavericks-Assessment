# Cypress-code
Technology: Cypress with javascript
IDE: Visual Studio code 

Spec file location: cypress-> e2e-> 1.Login.cy.js (Testing the UI Login functionality)
						                              2.AddtoCart.cy.js (Testing the AddtoCart functionality in UI)
						                              3.API_Addpet.cy.js (Testing both the scenarios of API Pet store)

POM file location: cypress-> e2e-> Page Object -> 1.Logindata.js (POM for Login.cy.js spec)
									                                2.Cartdata.js (POM for Cartdata.js)

Fixture file location: cypress-> fixtures-> 1. Cart.json 
(Add to Cart UI functionality: Name, Country and City fields in Place Order pop-up screen)

Critical data are stored in 'Cypress.env.json' for Login and Add to Cart UI functionalities, PFB the file format

{       "successusername": "",      \\ to check the positive flow 
        "successpassword": "",      \\ to check the positive flow
        "incorrectusername": "",    \\to check the negative flow by passing correct username and wrong password 
        "incorrectpassword": "",    \\to check the negative flow by passing correct username and wrong password 
        "Notexistusername": "",     \\to check the negative flow by passing username and password that does not exist
        "Notexistpassword": "",     \\to check the negative flow by passing username and password that does not exist
        "Creditcard": "",           \\ data to be passed in Creditcard field in Place Order pop-up screen
        "Year": "",                 \\data to be passed in Year field in Place Order pop-up screen
        "Month": ""                 \\data to be passed in Month field in Place Order pop-up screen                
}
"# Mavericks-Assessment" 
