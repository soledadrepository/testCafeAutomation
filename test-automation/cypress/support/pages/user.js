class indexPageUser {

    constructor () {
        // buttons
        this.createButton = '#bAdd';
        this.editButton = '#bEdit';
        this.deleteButton = '#bDelete';
        this.saveButton = '[type="submit"]';

        // others
        this.body = 'body';
        this.employeeList = '#employee-list > .active';

        // inputs
        this.firstNameInput = ':nth-child(3) > .ng-pristine';
        this.lastNameInput = ':nth-child(4) > .ng-pristine';
        this.emailInput = ':nth-child(5) > .ng-pristine';
        this.dateInput = ':nth-child(6) > .ng-pristine';
    }

    // functions

    // edit first user of the list
    editUser = () => {
        cy.get(this.body).first().click();
        cy.get(this.editButton).click();
        cy.get(this.firstNameInput).clear().type('Tomas');
        cy.get(this.dateInput).clear().type('09/09/2020');
        cy.get(this.saveButton).click();
    }

    // verify employee list contains Tomas
    verifyEditedUser = () => {
        cy.get(this.employeeList).contains('Tomas');
    }

    // add a new user
    createUser = (name, lastname, email, date) => {
        cy.get(this.createButton).click();
        cy.get(this.firstNameInput).clear().type(name);
        cy.get(this.lastNameInput).clear().type(lastname);
        cy.get(this.emailInput).clear().type(email);
        cy.get(this.dateInput).clear().type(date);
        cy.get(this.saveButton).click();
    }

    // verify that the new user was added
    verifyCreatedUser = () => {
        cy.get(this.employeeList).contains('Maria');
    }

    // delete last user added
    deleteUser = () => {
        cy.get(this.body).last().click();
        cy.get(this.deleteButton).click();
    }

    // verify that the last user was deleted
    verifyDeletedUser = () => {
        cy.get('Maria Lopez').should('not.exist');
    }
}
export default new indexPageUser();


