import { test } from '@playwright/test';
import { LoginPage } from '../../../pages/LoginPage';
import { CandidatePage } from '../../../pages/CandidatePage';
import users from '../../../data/users.json';

test.describe('RecruitIQ Candidates Page', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
      users.validRecruiter.email,
      users.validRecruiter.password
    );
  });

  test('should navigate to candidates page from sidebar', async ({ page }) => {
    const candidatePage = new CandidatePage(page);

    await candidatePage.openCandidatesPage();

    await candidatePage.expectCandidatesPageVisible();
  });

  test('should display all candidates by default', async ({ page }) => {
    const candidatePage = new CandidatePage(page);

    await candidatePage.openCandidatesPage();

    await candidatePage.expectAllCandidatesVisible();
  });

  test('should filter candidates by search text', async ({ page }) => {
    const candidatePage = new CandidatePage(page);

    await candidatePage.openCandidatesPage();

    await candidatePage.searchCandidate('Aisha');

    await candidatePage.expectOnlyAishaVisible();
  });

  test('should show empty state when no candidate matches search', async ({ page }) => {
    const candidatePage = new CandidatePage(page);

    await candidatePage.openCandidatesPage();

    await candidatePage.searchCandidate('xyz');

    await candidatePage.expectNoCandidatesFound();
  });
});