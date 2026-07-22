import { expect, Locator, Page } from '@playwright/test';

export class CandidatePage {
  readonly page: Page;

  readonly candidatesNavItem: Locator;
  readonly candidatesHeading: Locator;
  readonly candidateDirectoryHeading: Locator;
  readonly searchInput: Locator;

  readonly aishaCandidate: Locator;
  readonly rohanCandidate: Locator;
  readonly priyaCandidate: Locator;
  readonly noCandidatesMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.candidatesNavItem = page.getByRole('button', {
      name: 'Candidates',
    });

    this.candidatesHeading = page.getByRole('heading', {
      name: 'Candidates',
      exact: true,
    });

    this.candidateDirectoryHeading = page.getByRole('heading', {
      name: 'Candidate directory',
    });

    this.searchInput = page.getByLabel('Search candidates');

    this.aishaCandidate = page.getByRole('heading', {
      name: 'Aisha Khan',
    });

    this.rohanCandidate = page.getByRole('heading', {
      name: 'Rohan Mehta',
    });

    this.priyaCandidate = page.getByRole('heading', {
      name: 'Priya Sharma',
    });

    this.noCandidatesMessage = page.getByText('No candidates found');
  }

  async openCandidatesPage() {
    await this.candidatesNavItem.click();
  }

  async expectCandidatesPageVisible() {
    await expect(this.candidatesHeading).toBeVisible();
    await expect(this.candidateDirectoryHeading).toBeVisible();
    await expect(this.searchInput).toBeVisible();
  }

  async expectAllCandidatesVisible() {
    await expect(this.aishaCandidate).toBeVisible();
    await expect(this.rohanCandidate).toBeVisible();
    await expect(this.priyaCandidate).toBeVisible();
  }

  async searchCandidate(candidateName: string) {
    await this.searchInput.fill(candidateName);
  }

  async expectOnlyAishaVisible() {
    await expect(this.aishaCandidate).toBeVisible();
    await expect(this.rohanCandidate).not.toBeVisible();
    await expect(this.priyaCandidate).not.toBeVisible();
  }

  async expectNoCandidatesFound() {
    await expect(this.noCandidatesMessage).toBeVisible();
  }
}