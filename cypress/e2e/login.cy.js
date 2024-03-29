describe('Verify the login functionality', () => {
  beforeEach('to visit login page', () =>{
    cy.visit('https://flamboyant-allen-00cf47.netlify.app/login')
  })

  it('login button should not be clickable with null data', () => {
    cy.wait(4000)
    cy.get('.btn').should('be.disabled')
  })

  it('check login functionality with invalid data', () => {
    cy.get('#email').type('test@yopmial.com')
    cy.get('#password').type('Test@123')
    cy.get('.btn').click();
    cy.get('.ng-submitted > :nth-child(1) > :nth-child(6)').should('have.text', ' Incorrect Email Address ! ');
    //cy.get(':nth-child(2) > :nth-child(7)').should('have.text', ' Incorrect Password ! ')
    cy.get('.invalid-text').eq(3).should('have.text',' Incorrect Password ! ')
    cy.wait(4000)
  });

  it('check wrong format of password',() =>{
    cy.wait(4000)
    cy.get('#password').type('abc')
    cy.get(':nth-child(2) > .invalid-text').should('have.text', ' Invalid Input ')
  })

  it('check wrong format of email',() =>{
    cy.get('#email').type('abc')
    cy.get(':nth-child(1) > .invalid-text').should('have.text', ' Invalid Input ')
    cy.wait(4000)
  })

 var passmask = "Test@123"

  it('password masked and unmasked' ,() =>{
    cy.get('#password').type(passmask)
    cy.get('.right-icon').click();
    cy.get('#password').should('have.value', passmask)
    cy.wait(4000)
  })


  it('login check with clicking enter in the keyboard' ,() =>{
    cy.get('#email').type('abc@gmail.com')
    cy.get('#password').type('Test@123{enter}')
    cy.wait(4000)
  })

})


