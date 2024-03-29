describe('Verify the register functionality', () => {
    beforeEach('to visit login page', () => {
        cy.visit('https://flamboyant-allen-00cf47.netlify.app/signUp')
    })

    it('Check the create new button functionality', () => {
        cy.visit('https://flamboyant-allen-00cf47.netlify.app/login')
        cy.get('.form-footer > a').click()
        cy.url().should('be.equal', 'https://flamboyant-allen-00cf47.netlify.app/signUp')
    })

    it('check the field with null data', () => {
        cy.get('.btn').click()
        cy.get(':nth-child(1) > .error-messages > .invalid-text').should('have.text', ' Name is Required ')
        cy.get(':nth-child(2) > .error-messages > .invalid-text').should('have.text', ' Gender is Required ')
        cy.get(':nth-child(3) > .error-messages > .invalid-text').should('have.text', ' Date of Birth is Required ')
        cy.get(':nth-child(4) > .error-messages > .invalid-text').should('have.text', ' Phone Number is Required ')
        cy.get('.error-messages > :nth-child(2)').should('have.text', ' Please Enter Valid Email ')

    })

    it('check register functionality with valid data', () => {
        cy.get('#name').type('Shriya')
        cy.get('[type="radio"]').check('Female', { force: true })
        cy.get('#mat-input-0').type('2/4/2001')
        cy.get('.iti__selected-flag.dropdown-toggle').click()
        cy.get('#country-search-box').type('Nepal')
        cy.get('#iti-0__item-np').click()
        cy.get('#phone').type('9840023478')
        cy.get('#email').type('shriya@gmail.com')
        cy.get('.btn').click()
        cy.get(':nth-child(1) > #password').type('Shriya@123')
        cy.get(':nth-child(2) > #password').type('Shriya@123')
        cy.get('.btn').click()
        cy.url().should('be.equal', 'https://flamboyant-allen-00cf47.netlify.app/signUp/setPassword')
    })

    it('check wrong format of password', () => {
        cy.visit('https://flamboyant-allen-00cf47.netlify.app/signUp/setPassword')
        cy.get('#password').type('aa')
        cy.get('.error-messages > :nth-child(1)').should('have.text',' Must Be atleast 8 characters! ')
        cy.get('.error-messages > :nth-child(2)').should('have.text',' Must contain atleast 1 number! ')
        cy.get('.error-messages > :nth-child(3)').should('have.text',' Must contain atleast one uppercase character! ')
        cy.get('.text-sucess').should('have.text',' Must contain atleast one lowercase character! ')
        cy.get('.error-messages > :nth-child(5)').should('have.text',' Must contain atleast one special character! ')
    })

        it('check if "New Password" and "Confirm Password" can be different', () => {
            cy.visit('https://flamboyant-allen-00cf47.netlify.app/signUp/setPassword')
            cy.get('#password').type('Shriya@123')
            cy.get(':nth-child(2) > #password').type('Shrita123 Password Must Match ')
            cy.get(':nth-child(2) > .error-messages > .invalid-text').should('have.text', ' Password Must Match ')
        })
})

