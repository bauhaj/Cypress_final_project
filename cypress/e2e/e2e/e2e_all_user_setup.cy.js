import { faker } from "@faker-js/faker";
import { AccountApi as AccountApi } from "../../api/tegb/account_api";
import { UserApi } from "../../api/tegb/user_api";
import { LoginPage } from "../../page-object/tegb/login_page";

describe("E2E User Registration, Account Creation, Profile Completion, Verification", () => {
  beforeEach(() => {
    new LoginPage().openTegBUrl();
  });

  it("Creation of a new user registration", () => {
    const username = faker.internet.userName();
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const phone = faker.phone.number("+420#########");
    const startBalance = faker.number.int({
      min: 1000,
      max: 100000,
    });
    const type = "test";
    const accountApi = new AccountApi();
    const userApi = new UserApi();

    userApi
      .register(
        username,
        Cypress.env("tegB_password"),
        Cypress.env("tegB_email")
      )
      .then((response) => {
        expect(response.status).to.eq(201);
      });

    userApi.login(username, Cypress.env("tegB_password")).then((response) => {
      expect(response.status).to.eq(201);
      const accessTokenValue = response.body.access_token;
      cy.setCookie("access_token", accessTokenValue);

      accountApi
        .create(startBalance, "test", accessTokenValue)
        .then((response) => {
          expect(response.status).to.eq(201);
          expect(response.body.accountType).to.eq("test");
          expect(response.body.balance).to.eq(startBalance);
        });
    });

    new LoginPage()
      .logoIsVisible()
      .typeUsername(username)
      .typePassword(Cypress.env("tegB_password"))
      .clickLoginButton()

      .clickProfileActionButton()
      .typeFirstnameInput(firstname)
      .typeLastnameInput(lastname)
      .typeEmailInput(Cypress.env("tegB_email"))
      .typePhoneInput(phone)
      .typeAgeInput("33")
      .clickSaveChangesButton()

      .firstnameInputContainText(firstname)
      .lastnameInputContainText(lastname)
      .emailInputContainText(Cypress.env("tegB_email"))
      .phoneInputContainText(phone)
      .ageInputContainText("33")

      .accountNumberTdIsVisible()
      .accountBalanceThIsExist()
      .accountBalanceTdHaveContainText(startBalance)
      .clickLogoutButton()
      .loginButtonIsVisible();
  });
});
