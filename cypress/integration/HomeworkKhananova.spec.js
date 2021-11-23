describe('Test login in with valid data', () => {
  it('login', () => {
      cy.visit('https://the-internet.herokuapp.com/login');
      cy.get('#username')
      .type('tomsmith').should('have.value', 'tomsmith');
      cy.get('#password')
      .type('SuperSecretPassword!');
      cy.get('.fa')
      .click();

      cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
  });
});

describe('Test login in with unvalid username', () => {
    it('login', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('#username').type('ivanov');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.fa').click();
  
        cy.get('#flash').should('contain', 'Your username is invalid!');
    });
  });

describe('Test login in with unvalid password', () => {
    it('login', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecret');
        cy.get('.fa').click();
  
        cy.get('#flash').should('contain', 'Your password is invalid!');
    });
  });

describe('Test log out', () => {
    it('logout', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.fa').click();

        cy.get('.icon-2x').click();
  
        cy.get('#flash').should('contain', 'You logged out of the secure area!');

    });
  });