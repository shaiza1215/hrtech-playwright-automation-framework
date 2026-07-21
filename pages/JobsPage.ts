import { expect, Locator, Page } from '@playwright/test';

export class JobsPage {
  readonly page: Page;

  readonly jobsNavItem: Locator;
  readonly jobsHeading: Locator;
  readonly createJobHeading: Locator;

  readonly jobTitleInput: Locator;
  readonly departmentInput: Locator;
  readonly locationInput: Locator;
  readonly employmentTypeDropdown: Locator;
  readonly createJobButton: Locator;
  readonly formMessage: Locator;

  readonly frontendDeveloperJob: Locator;
  readonly qaAutomationJob: Locator;

  constructor(page: Page) {
    this.page = page;

    this.jobsNavItem = page.getByRole('button', { name: 'Jobs' });
    this.jobsHeading = page.getByRole('heading', { 

        name : 'Jobs',
        exact : true,

     });
    this.createJobHeading = page.getByRole('heading', { name: 'Add a new role' });

    this.jobTitleInput = page.getByLabel('Job title');
    this.departmentInput = page.getByLabel('Department');
    this.locationInput = page.getByLabel('Location');
    this.employmentTypeDropdown = page.getByLabel('Employment type');
    this.createJobButton = page.getByRole('button', { name: 'Create Job' });
    this.formMessage = page.getByRole('status');

    this.frontendDeveloperJob = page.getByRole('heading', { name: 'Frontend Developer' });
    this.qaAutomationJob = page.getByRole('heading', { name: 'QA Automation Engineer' });
  }

  async openJobsPage() {
    await this.jobsNavItem.click();
  }

  async expectJobsPageVisible() {
    await expect(this.jobsHeading).toBeVisible();
    await expect(this.createJobHeading).toBeVisible();
  }

  async expectExistingJobsVisible() {
    await expect(this.frontendDeveloperJob).toBeVisible();
    await expect(this.qaAutomationJob).toBeVisible();
  }

  async clickCreateJob() {
    await this.createJobButton.click();
  }

  async fillJobForm(
    jobTitle: string,
    department: string,
    location: string,
    employmentType: string
  ) {
    await this.jobTitleInput.fill(jobTitle);
    await this.departmentInput.fill(department);
    await this.locationInput.fill(location);
    await this.employmentTypeDropdown.selectOption(employmentType);
  }

  async expectFormMessage(message: string) {
    await expect(this.formMessage).toHaveText(message);
  }
}