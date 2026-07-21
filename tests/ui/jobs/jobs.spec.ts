import { test } from '@playwright/test';
import { LoginPage } from '../../../pages/LoginPage';
import { JobsPage } from '../../../pages/JobsPage';
import users from '../../../data/users.json';

test.describe('RecruitIQ Jobs Page', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
      users.validRecruiter.email,
      users.validRecruiter.password
    );
  });

  test('should navigate to jobs page from sidebar', async ({ page }) => {
    const jobsPage = new JobsPage(page);

    await jobsPage.openJobsPage();

    await jobsPage.expectJobsPageVisible();
  });

  test('should display existing open jobs', async ({ page }) => {
    const jobsPage = new JobsPage(page);

    await jobsPage.openJobsPage();

    await jobsPage.expectExistingJobsVisible();
  });

  test('should show validation message when creating job with empty fields', async ({ page }) => {
    const jobsPage = new JobsPage(page);

    await jobsPage.openJobsPage();

    await jobsPage.clickCreateJob();

    await jobsPage.expectFormMessage('Please fill all job details');
  });

  test('should show success message after creating job with valid details', async ({ page }) => {
    const jobsPage = new JobsPage(page);

    await jobsPage.openJobsPage();

    await jobsPage.fillJobForm(
      'Backend Developer',
      'Engineering',
      'Remote',
      'Full-time'
    );

    await jobsPage.clickCreateJob();

    await jobsPage.expectFormMessage('Job created successfully');
  });
});