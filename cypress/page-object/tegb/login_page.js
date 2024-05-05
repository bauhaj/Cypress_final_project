import { customElement } from "../../helpers/custom_element";
import { DashboardPage } from "./dashboard_page";
import { RegisterPage } from "./register_page";

export class LoginPage {
  constructor() {
    this.usernameInput = customElement("input[data-testid=username-input]");
    this.passwordInput = customElement("input[data-testid=password-input]");
    this.loginButton = customElement("button[data-testid=submit-button]");
    this.registerButton = customElement("button[data-testid=register-button]");
    this.logoImg = customElement("img[data-testid=logo-img]");
    cy.intercept("/tegb/profile").as("profile_api");
    cy.intercept("/tegb/accounts").as("accounts_api");
  }

  openTegBUrl() {
    cy.visit("/");
    return this;
  }

  logoIsVisible() {
    this.logoImg.get().should("be.visible");
    return this;
  }

  typeUsername(username) {
    this.usernameInput.get().type(username);
    return this;
  }

  typePassword(password) {
    this.passwordInput.get().type(password);
    return this;
  }

  clickLoginButton() {
    this.loginButton.get().click();
    cy.wait("@accounts_api").wait("@profile_api");
    return new DashboardPage();
  }

  clickRegister() {
    this.registerButton.get().click();
    return new RegisterPage();
  }

  loginButtonIsVisible() {
    this.loginButton.get().should("be.visible");
    return this;
  }
}
