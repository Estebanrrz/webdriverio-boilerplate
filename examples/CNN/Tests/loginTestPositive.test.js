import CNNHomePage from '../component_objects/CNNHomePage.js'
describe('Login  Modal: User Enters A valid credentials,  User is logged in', () => {

    it('reaches the homepage', () => {
        CNNHomePage.openAndMaximixeWindow();

    })

    it('clicks  User Account button', () => {
        CNNHomePage.userAccountButton.click();
    })

    it('Enters valid Email and Password acn clik on  login', () => {
        CNNHomePage.setCredentialOnSubmitForm("esteban_rr@hotmail.com", "1607Huge!");
        CNNHomePage.logginButton.click();
    })

    it(' user is Loged in', () => {
        CNNHomePage.userAccountButton.click();
        expect(CNNHomePage.preferencesAccount.isDisplayed()).to.equal(true);

    })

    // runs after all tests in this file
    after(function () {
        CNNHomePage.logoutAccount.click();

    });
})