import indexPageLogin from '../support/pages/login';
import indexPageUser from '../support/pages/user';

describe('Suite Cafe', function(){

    var email = 'maria.lopez@gmail.com',
        password = 'angular',
        name = 'Maria',
        lastname = 'Lopez',
        date = '09/09/2020';

    before(function() {
        cy.log("Executing precontions");
        cy.visit('/');
        indexPageLogin.login(email,password);
        indexPageLogin.verifyLogin();
    })

    after(function() {
        cy.log("Executing postconditions");
    })

    ///////////////////////// TEST CASES ///////////////////////////////////////


    it('01. Edit first user of the list', function() {
        indexPageUser.editUser();
        indexPageUser.verifyEditedUser();
    })

    it('02. Create a new user', function() {
        indexPageUser.createUser(name,lastname,email,date)
        indexPageUser.verifyCreatedUser();
    })

    it('03. Delete last user', function() {
        indexPageUser.deleteUser();
        indexPageUser.verifyDeletedUser();
    })

    it('04. Logout aplication', function() {
        indexPageLogin.logout();
        indexPageLogin.verifyLogout();
    })
})