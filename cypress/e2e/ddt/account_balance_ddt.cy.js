import accountBalanceDdt from "../../fixtures/account_balance_ddt.json";
import { AccountApi } from "../../api/tegb/account_api";
import { UserApi } from "../../api/tegb/user_api";
import { faker } from "@faker-js/faker";

// ! z důvodu bugu, nelze otestovat všechny možnosti a to konkrétně  e) 298 000 123 Kč;  d) - 196 000 921 Kč

describe("DDT Check For Combination Account Balance", () => {
  const accountApi = new AccountApi();
  const userApi = new UserApi();
  let username;

  beforeEach(() => {
    username = faker.internet.userName();
    userApi
      .register(
        username,
        Cypress.env("tegB_password"),
        Cypress.env("tegB_email")
      )
      .then((response) => {
        expect(response.status).to.eq(201);
      });
  });

  accountBalanceDdt.forEach((balanceData) => {
    it(`DDT account balance: ${balanceData.description}`, () => {
      userApi.login(username, Cypress.env("tegB_password")).then((response) => {
        expect(response.status).to.eq(201);
        const accessTokenValue = response.body.access_token;
        cy.setCookie("access_token", accessTokenValue);

        accountApi
          .create(balanceData.startBalance, balanceData.type, accessTokenValue)
          .then((response) => {
            expect(response.status).to.eq(balanceData.expectedStatusCode);
            if (balanceData.expectedErrorMessage == null) {
              expect(response.body.accountType).to.eq(balanceData.type);
              expect(response.body.balance).to.eq(balanceData.startBalance);
            } else {
              response.body.message.forEach((message) => {
                expect(message).to.eq(balanceData.expectedErrorMessage);
              });
            }
          });
      });
    });
  });
});
