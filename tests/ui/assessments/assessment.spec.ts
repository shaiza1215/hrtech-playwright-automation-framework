import { test } from '@playwright/test';
import { LoginPage } from '../../../pages/LoginPage';
import { AssessmentPage } from '../../../pages/AssessmentPage';
import users from '../../../data/users.json';

test.describe('RecruitIQ Assessments Page', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
      users.validRecruiter.email,
      users.validRecruiter.password
    );
  });

  test('should navigate to assessments page from sidebar', async ({ page }) => {
    const assessmentPage = new AssessmentPage(page);

    await assessmentPage.openAssessmentsPage();

    await assessmentPage.expectAssessmentsPageVisible();
  });

  test('should display existing assessments', async ({ page }) => {
    const assessmentPage = new AssessmentPage(page);

    await assessmentPage.openAssessmentsPage();

    await assessmentPage.expectExistingAssessmentsVisible();
  });

  test('should show validation message when creating assessment with empty fields', async ({ page }) => {
    const assessmentPage = new AssessmentPage(page);

    await assessmentPage.openAssessmentsPage();

    await assessmentPage.clickCreateAssessment();

    await assessmentPage.expectFormMessage('Please fill all assessment details');
  });

  test('should show success message after creating assessment with valid details', async ({ page }) => {
    const assessmentPage = new AssessmentPage(page);

    await assessmentPage.openAssessmentsPage();

    await assessmentPage.fillAssessmentForm(
      'API Testing Assessment',
      'QA Engineer',
      '45 Minutes',
      'Intermediate'
    );

    await assessmentPage.clickCreateAssessment();

    await assessmentPage.expectFormMessage('Assessment created successfully');
  });
});