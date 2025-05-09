describe('APIValidation', () => {
    it('Addingpet', () => {
         let requestBody = {

            
            "id": 1114,
                "category": {
                "id": 1114,
                    "name": "happy"
            },
            "name": "happy",
                "photoUrls": [
                    "string"
                ],
                    "tags": [
                        {
                            "id": 1114,
                            "name": "happy"
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

    it('Petsearch', ()=> {
        cy.request(
            {
                method: 'GET',
                url: 'https://petstore.swagger.io/v2/pet/1114',
                api_key: 'special-key'
            }
        )
                .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.status).to.eq('available'), 
                    expect(response.body.id).to.eq(1114),      
                    expect(response.body.name).to.eq('happy')       
            })
    })
})