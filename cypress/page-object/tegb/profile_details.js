import { customElement } from "../../helpers/custom_element";
import { MenuSection } from "./common/menu_section";
import { DashboardPage } from "./dashboard_page";

export class ProfileDetails extends MenuSection {
  constructor() {
    super();
    this.firstnameInput = customElement(
      "input[data-testid='chage-name-input']"
    );
    this.lastnameInput = customElement(
      "input[data-testid='chage-surname-input']"
    );
    this.emailInput = customElement("input[data-testid='chage-email-input']");
    this.phoneInput = customElement("input[data-testid='chage-phone-input']");
    this.ageInput = customElement("input[data-testid='chage-age-input']");
    this.saveChangesButton = customElement(
      "button[data-testid='save-changes-button']"
    );
    this.profileActionButton = customElement(
      "button[data-testid='toggle-edit-profile-button']"
    );
    cy.intercept("/tegb/profile").as("Patch_profile_api"); //při načtení dashboardu dříve než se provolá api PATCH, nezobrazí se upravená data
  }

  clickProfileActionButton() {
    this.profileActionButton.get().click();
    return new DashboardPage();
  }

  typeFirstnameInput(firstname) {
    this.firstnameInput.get().type(firstname);
    return this;
  }

  typeLastnameInput(lastname) {
    this.lastnameInput.get().type(lastname);
    return this;
  }

  typeEmailInput(email) {
    this.emailInput.get().type(email);
    return this;
  }

  typePhoneInput(phone) {
    this.phoneInput.get().type(phone);
    return this;
  }

  typeAgeInput(age) {
    this.ageInput.get().type(age);
    return this;
  }

  clickSaveChangesButton() {
    this.saveChangesButton.get().click();
    cy.wait("@Patch_profile_api");
    return new DashboardPage();
  }
}
