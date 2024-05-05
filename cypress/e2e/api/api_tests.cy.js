import { UserApi } from "../../api/tegb/user_api";

describe("Api Test For The Login", () => {
  it("Check the token and statusresponse in the API on the login", () => {
    const userApi = new UserApi();

    userApi
      .login(Cypress.env("tegB_username"), Cypress.env("tegB_password"))
      .then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.access_token).to.exist;
        expect(response.body.access_token).to.be.a("string").to.not.be.empty;
      });
  });
});
