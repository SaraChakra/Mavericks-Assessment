class Cartdata {
    Namefield = "#name";
    Countryfield = '#country';
    Cityfield = '#city';
    CCfield = '#card';
    Monthfield = '#month';
    Yearfield = '#year';

    PlaceOrderButton(){
        cy.get("[data-target='#orderModal']").click();
    }

    Cartname(Name) {
        cy.get(this.Namefield).type(Name);
    }

    CartCountry(Country) {
        cy.get(this.Countryfield).type(Country);
    }
    Cartcity(City) {
        cy.get(this.Cityfield).type(City);
    }
    CartCC(Creditcard) {
        cy.get(this.CCfield).type(Creditcard,{log:false}).invoke ('attr','type','password');
    }
    Cartmonth(Month) {
        cy.get(this.Monthfield).type(Month,{log:false}).invoke ('attr','type','password');
    }
    Cartyear(Year) {
        cy.get(this.Yearfield).type(Year,{log:false}).invoke ('attr','type','password');
    }
    Namelink(){
        cy.get('#name').type('{esc}'); 
    }
    PurchaseButton(){
         cy.get('[onclick="purchaseOrder()"]').click();
    }
    PostPurchaseOKButton(){
        cy.get('[style="display: inline-block;"]').click();
    }
   // cy.xpath("//*[@id="orderModal"]/div/div/div[3]/button[1]")
}
export default Cartdata; 