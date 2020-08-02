import Page from './Page'
class CNNHomePage extends Page {

  //locators
  get userAccountButton() { return $$('//*[@id="account-icon-button"]')[0]; }
  get emailAddress() { return $('//*[@id="login-modal-content"]/form/label/div/input'); }
  get password() { return $('//*[@id="login-modal-content"]/form/div[1]/label/div/input'); }
  get logginButton() { return $('//*[@id="login-form-button"]'); }
  get emailHelpText() { return $('//*[@id="login-modal-content"]/form/label/div/div'); }
  get preferencesAccount() { return $$('//*[@id="userPreferences-link"]/a')[0] }
  get preferencesAccount() { return $$('//*[@id="userPreferences-link"]/a')[0] }
  get logoutAccount() { return $$('//*[@id="userLogout-link"]/a')[0] }


  //Methods
  //Open  url @path , path is specified on  wdio.conf baseUrl  
  open(path) {
    super.open(path)
  }
  
  //Open and Maximixe  browser windows
  openAndMaximixeWindow(path){
  this.open(path);
  this.maximixe();
  }

  //Set Credentials @email and @password
  setCredentialOnSubmitForm(email, password) {
    this.emailAddress.setValue(email);
    this.password.setValue(password);
  }

}

//Contructor
export default new CNNHomePage()