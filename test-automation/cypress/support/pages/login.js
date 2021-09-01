class indexPageLogin {

    constructor() {
        this.userNameInput = ':nth-child(2) > .ng-pristine';
        this.passwordInput = '.ng-pristine';
        this.loginButton = 'fieldset > .main-button';
        this.mainButton = '.main-button';
        this.logoutButton = '.main-button'
    }

    login = (name, password) => {
        cy.get(this.userNameInput).type(name);
        cy.get(this.passwordInput).type(password);
        cy.get(this.loginButton).click();
    }

    verifyLogin = () => {
        cy.get(this.mainButton).contains('Logout');
    }

    logout = () => {
        cy.get(this.logoutButton).click();
    }

    verifyLogout = () => {
        cy.get(this.mainButton).contains('Login');
    }
}
export default new indexPageLogin();