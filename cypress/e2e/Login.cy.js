describe('Login', () => {
    it('Login after successful registration', () => {
        //Step 1a: Visiting Signup page
        cy.visit('https://meets.opencolabo.com/sign-in');
        cy.get('#signup_email').type('suhaila.shifa@teamfriends.co.jp');
        cy.get('.ant-form-item-control-input-content > .ant-btn').click();

        //Step 1b: OTP screen
        cy.get('.ant-otp > :nth-child(1)').type('7');
        cy.get('.ant-otp > :nth-child(2)').type('7');
        cy.get('.ant-otp > :nth-child(3)').type('7');
        cy.get('.ant-otp > :nth-child(4)').type('7');
        cy.get('.ant-otp > :nth-child(5)').type('7');
        cy.get('.ant-otp > :nth-child(6)').type('7');
        cy.contains('Authenticate and Continue').click();
        
    })
    
  })
