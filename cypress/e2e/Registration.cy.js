describe('Registration', () => {
  it('New user registration without invitation', () => {
      //Step 1a: Visiting Signup page
      cy.visit('https://meets.opencolabo.com/sign-up');
      cy.get('#signup_email').type('apiffany.hasting@allwebemails.com');
      cy.get('#signup_is_signup').check();
      cy.contains('Create Account').click();

      //Step 1b: OTP screen
      cy.get('.ant-otp > :nth-child(1)').type('7');
      cy.get('.ant-otp > :nth-child(2)').type('7');
      cy.get('.ant-otp > :nth-child(3)').type('7');
      cy.get('.ant-otp > :nth-child(4)').type('7');
      cy.get('.ant-otp > :nth-child(5)').type('7');
      cy.get('.ant-otp > :nth-child(6)').type('7');
      cy.contains('Authenticate and Continue').click();

      //Step 2: Enter name screen
      cy.get('#user-information_username').type('Suh_Nov_17');
      cy.contains('Next').click();

      //Step 3a: Enter Workspace name screen
      cy.get('#user-information_workspaceName').type('Suh_Workspace_Nov_17');
      cy.contains('Next').click();

      //Step 3b: Connect to Calender
      //cy.get('#user-information_workspaceEmail').type('xagome8483@cironex.com');
      cy.contains('Connect Later').click();
      //this will login the new user

      //Logout
      cy.contains('Settings').click();
      cy.contains('Logout').click();

  })
    

})