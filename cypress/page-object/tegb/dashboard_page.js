import { customElement } from "../../helpers/custom_element";
import { MenuSection } from "./common/menu_section";
import { LoginPage } from "./login_page";
import { ProfileDetails } from "./profile_details";

export class DashboardPage extends MenuSection {
  constructor() {
    super();
    this.profileActionButton = customElement(
      "button[data-testid='toggle-edit-profile-button']"
    );
    this.firstnameInput = customElement("div[data-testid='name']");
    this.lastnameInput = customElement("div[data-testid='surname']");
    this.emailInput = customElement("div[data-testid='email']");
    this.phoneInput = customElement("div[data-testid='phone']");
    this.ageInput = customElement("div[data-testid='age']");
    this.accountNumberTd = customElement("td[data-testid='account-number']");
    this.accountNumberTh = customElement(
      "th[data-testid='account-number-heading']"
    );
    this.accountBalanceTd = customElement("td[data-testid='account-balance']");
    this.accountBalanceTh = customElement(
      "th[data-testid='account-balance-heading']"
    );
    this.detailProfil = customElement(
      "h2[data-testid='profile-details-title']"
    );
    this.accountTypeTh = customElement(
      "th[data-testid='account-type-heading']"
    );
    this.accountActionButton = customElement(".account-action");
  }

  clickProfileActionButton() {
    this.profileActionButton.get().click();
    return new ProfileDetails();
  }

  firstnameInputContainText(firstname) {
    this.firstnameInput.get().should("contain.text", firstname);
    return this;
  }

  lastnameInputContainText(lastname) {
    this.lastnameInput.get().should("contain.text", lastname);
    return this;
  }

  emailInputContainText(email) {
    this.emailInput.get().should("contain.text", email);
    return this;
  }

  phoneInputContainText(phone) {
    this.phoneInput.get().should("contain.text", phone);
    return this;
  }

  ageInputContainText(age) {
    this.ageInput.get().should("contain.text", age);
    return this;
  }

  accountNumberTdIsVisible() {
    this.accountNumberTd.get().should("be.visible");
    return this;
  }

  accountBalanceTdHaveContainText(accountBalance) {
    this.accountBalanceTd
      .get()
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.contain(accountBalance);
      });
    return this;
  }

  accountBalanceThIsExist() {
    this.accountBalanceTh.get().should("exist");
    return this;
  }

  detailProfilIsVisible() {
    this.detailProfil.get().should("be.visible");
    return this;
  }

  detailProfilHasText(detailProfiltext) {
    this.detailProfil.get().should("have.text", detailProfiltext);
    return this;
  }

  firstnameInputIsVisible() {
    this.firstnameInput.get().should("be.visible");
    return this;
  }

  lastnameInputIsVisible() {
    this.lastnameInput.get().should("be.visible");
    return this;
  }

  emailInputIsVisible() {
    this.emailInput.get().should("be.visible");
    return this;
  }

  phoneInputIsVisible() {
    this.phoneInput.get().should("be.visible");
    return this;
  }

  ageInputIsVisible() {
    this.ageInput.get().should("be.visible");
    return this;
  }

  profileActionButtonIsVisible() {
    this.profileActionButton.get().should("be.visible");
    return this;
  }

  profileActionButtonHasText(profileActionButtontext) {
    this.profileActionButton.get().should("have.text", profileActionButtontext);
    return this;
  }

  accountNumberThIsVisible() {
    this.accountNumberTh.get().should("be.visible");
    return this;
  }

  accountNumberThHasText(accountNumberThtext) {
    this.accountNumberTh.get().should("have.text", accountNumberThtext);
    return this;
  }

  accountBalanceThIsVisible() {
    this.accountBalanceTh.get().should("be.visible");
    return this;
  }

  accountBalanceThHasText(accountBalanceThtext) {
    this.accountBalanceTh.get().should("have.text", accountBalanceThtext);
    return this;
  }

  accountTypeThIsVisible() {
    this.accountTypeTh.get().should("be.visible");
    return this;
  }

  accountTypeThHasText(accountTypeThtext) {
    this.accountTypeTh.get().should("have.text", accountTypeThtext);
    return this;
  }

  accountActionButtonIsVisible() {
    this.accountActionButton.get().should("be.visible");
    return this;
  }

  accountActionButtonHasText(accountActionButtontext) {
    this.accountActionButton.get().should("have.text", accountActionButtontext);
    return this;
  }

  accountActionButtonIsClickable() {
    this.accountActionButton.get().click();
    return this;
  }
}
