import Cartdata from "./Page Object/Cartdata";

describe('AddtoCart', () => {
    it('FirstProduct', () => {
        cy.visitBase();
        //Using custom command for identifying product
        cy.linkselection("Samsung galaxy s6");
        cy.takeScreenshot("Product selection");
        Cypress._.times(3, () => {
            //Adding product to cart
            cy.linkselection("Add to cart")
            //Handling Alert
            cy.on('window:alert', (t) => {  
                expect(t).to.contains('Product added');
               cy.takeScreenshot("Product Added");
            })
        })


        //Clicking Cart option
        const Cart = new Cartdata();
         cy.linkselection("Cart")
        //Clicking Place Order button
         Cart.PlaceOrderButton();
         cy.takeScreenshot("Place Order");
        //Calling fixture data
        cy.fixture('Cart').then((data) => {
            //Referring POM file
            
            Cart.Cartname(data.Name)
            Cart.CartCountry(data.Country)
            Cart.Cartcity(data.City)
            Cart.CartCC(Cypress.env('Creditcard'))
            Cart.Cartmonth(Cypress.env('Month'))
            Cart.Cartyear(Cypress.env('Year'))
            cy.takeScreenshot("Entered cart details");
            //Clicking on Purchase button
            Cart.PurchaseButton();
            cy.get('h2').invoke('text').should('include', "Thank you for your purchase!");
            cy.takeScreenshot("Confirmation message");
            //Clicking on OK button
            Cart.PostPurchaseOKButton();
            //Clicking on Cancel button
            
        })
    })  

    })
     