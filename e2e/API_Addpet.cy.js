describe('APIValidation', () => {
    it('Addingpet', () => {
         let requestBody = {

            
            "id": 2217,
                "category": {
                "id": 2217,
                    "name": "shiv"
            },
            "name": "shiv",
                "photoUrls": [
                    "string"
                ],
                    "tags": [
                        {
                            "id": 2217,
                            "name": "shiv"
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
                expect(response.body.status).to.eq(requestBody.status),
                    expect(response.body.id).to.eq(requestBody.id),
                    expect(response.body.name).to.eq(requestBody.name)

            })
    })

    it('Petsearch', () => {
        cy.wait(1000);
        cy.request(
            {
                method: 'GET',
                url: 'https://petstore.swagger.io/v2/pet/2217',
                api_key: 'special-key'
            }
        )
                .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.status).to.eq('available'), 
                    expect(response.body.id).to.eq(2217),      
                    expect(response.body.name).to.eq('shiv')           
            })
    }) 
})