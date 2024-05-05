import { customElement } from "../../../helpers/custom_element";
import { LoginPage } from "../login_page";

export class MenuSection {
  constructor() {
    this.logoutButton = customElement(".logout-link");
    this.tegbLogo = customElement("img[alt='Tredgate Logo']");
    this.tegbTitle = customElement(".app-title");
    this.homeMenu = "//li[contains(text(),'Domů')]";
    this.accountsMenu = "//li[contains(text(),'Účty')]";
    this.transactionMenu = "//li[normalize-space()='Transakce']";
    this.supportMenu = "//li[normalize-space()='Podpora']";
  }

  clickLogoutButton() {
    this.logoutButton.get().click();
    return new LoginPage();
  }

  logoutButtonIsVisible() {
    this.logoutButton.get().should("be.visible");
    return this;
  }

  logoutButtonHaveText(havetext) {
    this.logoutButton.get().should("have.text", havetext);
    return this;
  }

  logoutButtonIsClickable() {
    this.logoutButton.get().click();
    return new LoginPage();
  }

  tegbLogoIsVisible() {
    this.tegbLogo.get().should("be.visible");
    return this;
  }

  tegbTitleIsExist() {
    this.tegbTitle.get().should("exist");
    return this;
  }

  tegbTitleHaveText(havetext) {
    this.tegbTitle.get().should("have.text", havetext);
    return this;
  }

  homeMenuIsVisible() {
    cy.xpath(this.homeMenu).should("be.visible");
    return this;
  }

  homeMenuHasText(hometext) {
    cy.xpath(this.homeMenu).should("have.text", hometext);
    return this;
  }

  accountsMenuIsVisible() {
    cy.xpath(this.accountsMenu).should("be.visible");
    return this;
  }

  accountsMenuHasText(accountstext) {
    cy.xpath(this.accountsMenu).should("have.text", accountstext);
    return this;
  }

  transactionMenuIsVisible() {
    cy.xpath(this.transactionMenu).should("be.visible");
    return this;
  }

  transactionMenuHasText(transactiontext) {
    cy.xpath(this.transactionMenu).should("have.text", transactiontext);
    return this;
  }

  supportMenuIsVisible() {
    cy.xpath(this.supportMenu).should("be.visible");
    return this;
  }

  supportMenuHasText(supporttext) {
    cy.xpath(this.supportMenu).should("have.text", supporttext);
    return this;
  }
}
