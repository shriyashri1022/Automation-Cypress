describe('Verify the register functionality', () => {
    it('check with valid name ',() =>{
        cy.visit('https://flamboyant-allen-00cf47.netlify.app/signUp')
        cy.get('#name').type('Shriya Shrestha')
      })

      it('tick the button',() =>{
        cy.visit('https://flamboyant-allen-00cf47.netlify.app/signUp')
        cy.get('#mat-radio-3 > .mat-radio-label > .mat-radio-label-content')
        cy.get('#mat-radio-3 > .mat-radio-label > .mat-radio-label-content')
      })
      it('Choose a Date',() =>{
        cy.visit('https://flamboyant-allen-00cf47.netlify.app/signUp')
        cy.get(':nth-child(3) > .form-label')
      })
      it('Insert Phone Number',() =>{
        cy.visit('https://flamboyant-allen-00cf47.netlify.app/signUp')
        cy.get('#phone').type('9840023478')
        cy.get(':nth-child(3) > .form-label')
      })
      
      it('Email Address',() =>{
        cy.visit('https://flamboyant-allen-00cf47.netlify.app/signUp')
        cy.get('#email').type('shriya@gmail.com')
        cy.get(':nth-child(3) > .form-label')
      })


      it.only('check the valid email',() =>{
        cy.visit('https://flamboyant-allen-00cf47.netlify.app/signUp')
        cy.get('.btn').click();
        cy.get('.error-messages > :nth-child(2)')
          })
        
    
  })

 