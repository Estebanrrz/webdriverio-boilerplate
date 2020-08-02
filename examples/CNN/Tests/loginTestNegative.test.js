import CNNHomePage from '../component_objects/CNNHomePage.js'


describe('Login  Modal: User Enters A invalid credentials, App show an error message', () => {

  it('reaches the homepage', () => {
  CNNHomePage.openAndMaximixeWindow();

  })

  it('clicks  User Account button', () => {
    CNNHomePage.userAccountButton.waitForDisplayed(undefined, true),
      CNNHomePage.userAccountButton.click();
  })

  it('Enters invalid Email and Password acn clik on  login', () => {
    CNNHomePage.setCredentialOnSubmitForm("email", "password");
    CNNHomePage.logginButton.click();
  })

  it('Shows an error message  Indicating Email adress is invalid', () => {
    expect(CNNHomePage.emailHelpText.getText()).to.equal('Please enter a valid email address')
  })
})






