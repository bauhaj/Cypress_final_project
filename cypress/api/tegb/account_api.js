export class AccountApi {
  create(startBalance, type, access_token) {
    return cy.request({
      failOnStatusCode: false,
      method: "POST",
      url: Cypress.env("tegb_api_url_be") + "/tegb/accounts/create",
      headers: {
        authorization: "Bearer " + access_token,
      },
      body: {
        startBalance: startBalance,
        type: type,
      },
    });
  }
}
