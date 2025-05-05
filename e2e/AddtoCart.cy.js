import Cartdata from "./Page Object/Cartdata";

describe('AddtoCart', () => {
    it('FirstProduct', () => {
        cy.visit('https://www.demoblaze.com/');
        //Using custom command for identifying product
        cy.linkselection("Samsung galaxy s6");
        Cypress._.times(3, () => {
            //Adding product to cart
            cy.linkselection("Add to cart")
            //Handling Alert
            cy.on('window:alert', (t) => {
                expect(t).to.contains('Product added');
            })
        })


        //Clicking Cart option
        const ln = new Cartdata();
         cy.linkselection("Cart")
        //Clicking Place Order button
         cy.get("[data-target='#orderModal']").click();
        //Calling fixture data
        cy.fixture('Cart').then((data) => {
            //Referring POM file
            
            ln.Cartname(data.Name)
            ln.CartCountry(data.Country)
            ln.Cartcity(data.City)
            ln.CartCC(data.Creditcard)
            ln.Cartmonth(data.Month)
            ln.Cartyear(data.Year)

            //Clicking on Purchase button
            cy.get('[onclick="purchaseOrder()"]').click();
            cy.get('h2').invoke('text').should('include', "Thank you for your purchase!");
            //Clicking on OK button
            cy.get('[style="display: inline-block;"]').click();
        })
    })

    })
     