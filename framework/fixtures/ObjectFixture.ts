import { test as base } from "@playwright/test";
import { LoginPage } from "framework/pages/signin/LoginPage";
import { ProfilePage } from "framework/pages/profile/ProfilePage";
import { BookStorePage } from "framework/pages/bookstore/BookStorePage";
import { BookDetailsPage } from "framework/pages/bookstore/BookDetailsPage";
import { TestDataProvider } from "framework/utils/TestDataProvider";

type Objects = {
  loginPage: LoginPage;
  profilePage: ProfilePage;
  bookStorePage: BookStorePage;
  bookDetailsPage: BookDetailsPage;
  testDataProvider: TestDataProvider;
};

const testExtendedWithPages = base.extend<Objects>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  profilePage: async ({ page }, use) => {
    await use(new ProfilePage(page));
  },
  bookStorePage: async ({ page }, use) => {
    await use(new BookStorePage(page));
  },
  bookDetailsPage: async ({ page }, use) => {
    await use(new BookDetailsPage(page));
  },
  testDataProvider: async ({}, use) => {
    await use(new TestDataProvider());
  }
});
export const test = testExtendedWithPages;
export const expect = test.expect;
export const slowExpect = expect.configure({ timeout: 10000 });
export const extrimelySlowExpect = expect.configure({ timeout: 20000 });
