class Cartdata {
    Namefield = "#name";
    Countryfield = '#country';
    Cityfield = '#city';
    CCfield = '#card';
    Monthfield = '#month';
    Yearfield = '#year';


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
        cy.get(this.CCfield).type(Creditcard);
    }
    Cartmonth(Month) {
        cy.get(this.Monthfield).type(Month);
    }
    Cartyear(Year) {
        cy.get(this.Yearfield).type(Year);
    }
    
}
export default Cartdata; 