import { expect, Locator, Page } from '@playwright/test';

export class AssessmentPage {
  readonly page: Page;

  readonly assessmentsNavItem: Locator;
  readonly assessmentsHeading: Locator;
  readonly createAssessmentHeading: Locator;

  readonly assessmentTitleInput: Locator;
  readonly assessmentRoleInput: Locator;
  readonly assessmentDurationDropdown: Locator;
  readonly assessmentLevelDropdown: Locator;
  readonly createAssessmentButton: Locator;
  readonly formMessage: Locator;

  readonly playwrightAssessment: Locator;
  readonly manualTestingAssessment: Locator;

  constructor(page: Page) {
    this.page = page;

    this.assessmentsNavItem = page.getByRole('button', {
      name: 'Assessments',
    });

    this.assessmentsHeading = page.getByRole('heading', {
      name: 'Assessments',
      exact: true,
    });

    this.createAssessmentHeading = page.getByRole('heading', {
      name: 'Add a new assessment',
    });

    this.assessmentTitleInput = page.getByLabel('Assessment title');
    this.assessmentRoleInput = page.getByLabel('Role');
    this.assessmentDurationDropdown = page.getByLabel('Duration');
    this.assessmentLevelDropdown = page.getByLabel('Difficulty level');
    this.createAssessmentButton = page.getByRole('button', {
      name: 'Create Assessment',
    });
    this.formMessage = page.getByRole('status');

    this.playwrightAssessment = page.getByRole('heading', {
      name: 'Playwright Automation Test',
    });

    this.manualTestingAssessment = page.getByRole('heading', {
      name: 'Manual Testing Fundamentals',
    });
  }

  async openAssessmentsPage() {
    await this.assessmentsNavItem.click();
  }

  async expectAssessmentsPageVisible() {
    await expect(this.assessmentsHeading).toBeVisible();
    await expect(this.createAssessmentHeading).toBeVisible();
  }

  async expectExistingAssessmentsVisible() {
    await expect(this.playwrightAssessment).toBeVisible();
    await expect(this.manualTestingAssessment).toBeVisible();
  }

  async clickCreateAssessment() {
    await this.createAssessmentButton.click();
  }

  async fillAssessmentForm(
    assessmentTitle: string,
    assessmentRole: string,
    assessmentDuration: string,
    assessmentLevel: string
  ) {
    await this.assessmentTitleInput.fill(assessmentTitle);
    await this.assessmentRoleInput.fill(assessmentRole);
    await this.assessmentDurationDropdown.selectOption(assessmentDuration);
    await this.assessmentLevelDropdown.selectOption(assessmentLevel);
  }

  async expectFormMessage(message: string) {
    await expect(this.formMessage).toHaveText(message);
  }
}