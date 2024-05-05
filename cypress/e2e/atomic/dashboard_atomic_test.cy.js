import { DashboardPage } from "../../page-object/tegb/dashboard_page";
import { LoginPage } from "../../page-object/tegb/login_page";

describe("Dashboard Atomic Tests", { testIsolation: false }, () => {
  before(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    new LoginPage()
      .openTegBUrl()
      .typeUsername(Cypress.env("tegB_username"))
      .typePassword(Cypress.env("tegB_password"))
      .clickLoginButton();
  });

  context("Left menu", () => {
    it("Home menu is visible", () => {
      new DashboardPage().homeMenuIsVisible();
    });

    it("Home menu has text", () => {
      new DashboardPage().homeMenuHasText("Domů");
    });

    it("Accounts menu is visible", () => {
      new DashboardPage().accountsMenuIsVisible();
    });

    it("Accounts menu has text", () => {
      new DashboardPage().accountsMenuHasText("Účty");
    });

    it("Transaction menu is visible", () => {
      new DashboardPage().transactionMenuIsVisible();
    });

    it("Transaction menu has text", () => {
      new DashboardPage().transactionMenuHasText("Transakce");
    });

    it("Support menu is visible", () => {
      new DashboardPage().supportMenuIsVisible();
    });

    it("Support menu has text", () => {
      new DashboardPage().supportMenuHasText("Podpora");
    });
  });

  context("Dashboard content", () => {
    it("Detail Profil is visible", () => {
      new DashboardPage().detailProfilIsVisible();
    });

    it("Detail Profil has text", () => {
      new DashboardPage().detailProfilHasText("Detaily Profilu");
    });

    it("Firstname input is visible", () => {
      new DashboardPage().firstnameInputIsVisible();
    });

    it("Firstname input has contain text", () => {
      new DashboardPage().firstnameInputContainText("Jméno");
    });

    it("Lastname input is visible", () => {
      new DashboardPage().lastnameInputIsVisible();
    });

    it("Lastname input has contain text", () => {
      new DashboardPage().lastnameInputContainText("Příjmení");
    });

    it("Email input is visible", () => {
      new DashboardPage().emailInputIsVisible();
    });

    it("Email input has contain text", () => {
      new DashboardPage().emailInputContainText("Email");
    });

    it("Phone input is visible", () => {
      new DashboardPage().phoneInputIsVisible();
    });

    it("Phone input has contain text", () => {
      new DashboardPage().phoneInputContainText("Telefon");
    });

    it("Age input is visible", () => {
      new DashboardPage().ageInputIsVisible();
    });

    it("Age input has contain text", () => {
      new DashboardPage().ageInputContainText("Věk");
    });

    it("Profile Action Button is visible", () => {
      new DashboardPage().profileActionButtonIsVisible();
    });

    it("Profile Action Button has text", () => {
      new DashboardPage().profileActionButtonHasText("Upravit profil");
    });

    it("Profile Action Button is clickable", () => {
      new DashboardPage().clickProfileActionButton().clickProfileActionButton();
    });

    it("Account NumberTh is visible", () => {
      new DashboardPage().accountNumberThIsVisible();
    });

    it("Account NumberTh has text", () => {
      new DashboardPage().accountNumberThHasText("Číslo účtu");
    });

    it("Account BalanceTh is visible", () => {
      new DashboardPage().accountBalanceThIsVisible();
    });

    it("Account BalanceTh has text", () => {
      new DashboardPage().accountBalanceThHasText("Zůstatek");
    });

    it("Account TypeTh is visible", () => {
      new DashboardPage().accountTypeThIsVisible();
    });

    it("Account TypeTh has text", () => {
      new DashboardPage().accountTypeThHasText("Typ účtu");
    });

    it("Account Action Button is visible", () => {
      new DashboardPage().accountActionButtonIsVisible();
    });

    it("Account Action Button has text", () => {
      new DashboardPage().accountActionButtonHasText("Přidat účet");
    });

    it("Account Action Button is clickable", () => {
      new DashboardPage().accountActionButtonIsClickable();
    });
  });

  context("Header section", () => {
    it("Logo is visible", () => {
      new DashboardPage().tegbLogoIsVisible();
    });

    it("TegB Title is exist", () => {
      new DashboardPage().tegbTitleIsExist();
    });

    it("TegB Title have text", () => {
      new DashboardPage().tegbTitleHaveText("TEG#B Dashboard");
    });

    it("Logout Button is visible", () => {
      new DashboardPage().logoutButtonIsVisible();
    });

    it("Logout Button have text", () => {
      new DashboardPage().logoutButtonHaveText("Odhlásit se");
    });

    it("Logout Button is clickable", () => {
      new DashboardPage().logoutButtonIsClickable();
    });
  });
});
