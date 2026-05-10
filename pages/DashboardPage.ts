import { expect, Locator, Page } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly dashboardHeading: Locator;

  readonly sidebar: Locator;
  readonly statsSection: Locator;
  readonly overviewSection: Locator;

  readonly openRolesCard: Locator;
  readonly candidatesCard: Locator;
  readonly assessmentsCard: Locator;

  readonly dashboardNavItem: Locator;
  readonly jobsNavItem: Locator;
  readonly assessmentsNavItem: Locator;
  readonly candidatesNavItem: Locator;
  readonly reportsNavItem: Locator;

  readonly hiringOverviewCard: Locator;
  readonly topInsightCard: Locator;

  constructor(page: Page) {
    this.page = page;

    this.dashboardHeading = page.getByRole('heading', {
      name: 'Recruiter Dashboard',
    });

    // We scope locators to specific page sections to avoid strict mode issues.
    this.sidebar = page.locator('.dashboard-sidebar');
    this.statsSection = page.locator('.stats-grid');
    this.overviewSection = page.locator('.overview-panel');

    this.openRolesCard = this.statsSection.getByText('Open Roles', { exact: true });
    this.candidatesCard = this.statsSection.getByText('Candidates', { exact: true });
    this.assessmentsCard = this.statsSection.getByText('Assessments', { exact: true });

    this.dashboardNavItem = this.sidebar.getByText('Dashboard', { exact: true });
    this.jobsNavItem = this.sidebar.getByText('Jobs', { exact: true });
    this.assessmentsNavItem = this.sidebar.getByText('Assessments', { exact: true });
    this.candidatesNavItem = this.sidebar.getByText('Candidates', { exact: true });
    this.reportsNavItem = this.sidebar.getByText('Reports', { exact: true });

    this.hiringOverviewCard = this.overviewSection.getByText('Hiring Overview', { exact: true });
    this.topInsightCard = this.overviewSection.getByText('Top Insight', { exact: true });
  }

  async expectDashboardVisible() {
    await expect(this.dashboardHeading).toBeVisible();
  }

  async expectStatsCardsVisible() {
    await expect(this.openRolesCard).toBeVisible();
    await expect(this.candidatesCard).toBeVisible();
    await expect(this.assessmentsCard).toBeVisible();
  }

  async expectSidebarNavigationVisible() {
    await expect(this.dashboardNavItem).toBeVisible();
    await expect(this.jobsNavItem).toBeVisible();
    await expect(this.assessmentsNavItem).toBeVisible();
    await expect(this.candidatesNavItem).toBeVisible();
    await expect(this.reportsNavItem).toBeVisible();
  }

  async expectOverviewCardsVisible() {
    await expect(this.hiringOverviewCard).toBeVisible();
    await expect(this.topInsightCard).toBeVisible();
  }
}