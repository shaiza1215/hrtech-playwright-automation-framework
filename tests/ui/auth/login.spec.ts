import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/LoginPage';
import users from '../../../data/users.json';

test.describe('RecruitIQ Login Page', () => {
  test('should display login page fields', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.expectLoginPageVisible();
  });

  test('should show error for invalid login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
      users.invalidRecruiter.email,
      users.invalidRecruiter.password
    );

    await loginPage.expectErrorMessage('Invalid email or password');
  });

  test('should login successfully with valid recruiter credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
      users.validRecruiter.email,
      users.validRecruiter.password
    );

    await expect(page.getByRole('heading', { name: 'Recruiter Dashboard' })).toBeVisible();
  });
});