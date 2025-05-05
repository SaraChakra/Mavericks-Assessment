describe('APIValidation', () => {
    it('Addingpet', () => {
         let requestBody = {

            
            "id": 2212,
                "category": {
                "id": 2212,
                    "name": "string"
            },
            "name": "genie",
                "photoUrls": [
                    "string"
                ],
                    "tags": [
                        {
                            "id": 2212,
                            "name": "string"
                        }
                    ],
                        "status": "available" 
        }




        cy.request(
            {
                method: 'POST',
                url: 'https://petstore.swagger.io/v2/pet',
                body: requestBody,
                api_key: 'special-key' 
            }
        )
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.status).to.eq('available'),
                    expect(response.body.id).to.eq(2212),
                    expect(response.body.name).to.eq('genie')

            })
    })

    it('Petsearch', ()=> {
        cy.request(
            {
                method: 'GET',
                url: 'https://petstore.swagger.io/v2/pet/2212',
                api_key: 'special-key'
            }
        )
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.status).to.eq('available'),
                    expect(response.body.id).to.eq(2212),  
                    expect(response.body.name).to.eq('baaaa')
            })
    })
})