import { test } from '@playwright/test';
import { LoginPage } from '../../../pages/LoginPage';
import { DashboardPage } from '../../../pages/DashboardPage';
import users from '../../../data/users.json';

test.describe('RecruitIQ Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
      users.validRecruiter.email,
      users.validRecruiter.password
    );
  });

  test('should display dashboard after successful login', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);

    await dashboardPage.expectDashboardVisible();
  });

  test('should display dashboard stats cards', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);

    await dashboardPage.expectStatsCardsVisible();
  });

  test('should display sidebar navigation items', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);

    await dashboardPage.expectSidebarNavigationVisible();
  });

  test('should display overview cards', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);

    await dashboardPage.expectOverviewCardsVisible();
  });
});