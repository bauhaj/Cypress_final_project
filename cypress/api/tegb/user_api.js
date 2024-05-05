export class UserApi {
  login(username, password) {
    return cy.request({
      method: "POST",
      url: Cypress.env("tegb_api_url_be") + "/tegb/login",
      body: {
        username: username,
        password: password,
      },
    });
  }

  register(username, password, email) {
    return cy.request({
      method: "POST",
      url: Cypress.env("tegb_api_url_be") + "/tegb/register",
      body: {
        username: username,
        password: password,
        email: email,
      },
    });
  }
}
