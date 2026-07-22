# RecruitIQ Playwright Automation Framework

RecruitIQ is a sample HRTech recruitment platform built to demonstrate end-to-end QA automation skills using Playwright and TypeScript.

This project includes UI automation, API testing, Page Object Model structure, reusable test data, and GitHub Actions CI integration.

---

## Project Overview

RecruitIQ simulates a recruiter workspace where hiring teams can:

- Login to the recruiter dashboard
- View hiring overview and dashboard metrics
- Manage jobs
- Create assessments
- Search candidates
- Validate API responses

The goal of this project is to showcase practical QA Automation skills for real-world web application testing.

---

## Tech Stack

| Area | Tools Used |
|---|---|
| Automation Tool | Playwright |
| Language | TypeScript |
| Frontend App | React + Vite |
| Test Runner | Playwright Test |
| Test Design | Page Object Model |
| CI/CD | GitHub Actions |
| Reports | Playwright HTML Report |
| API Testing | Playwright APIRequestContext |

---

## Test Coverage

| Module | Test Type | Scenarios Covered |
|---|---|---|
| Login | UI | Valid login, invalid login, empty fields |
| Dashboard | UI | Dashboard visibility, stats cards, sidebar navigation, overview cards |
| Jobs | UI | Navigation, job form validation, job creation, existing jobs |
| Assessments | UI | Navigation, assessment form validation, assessment creation, existing assessments |
| Candidates | UI | Navigation, candidate listing, search filter, empty state |
| API | API | GET users, POST user, invalid endpoint 404 |

---

## Current Test Count

| Test Suite | Count |
|---|---:|
| UI Tests | 19 |
| API Tests | 3 |
| Total Tests | 22 |

---

## Latest Test Execution Result

The complete Playwright test suite was executed successfully.

```text
22 passed
19 UI tests passed
3 API tests passed
0 failed

## Project Structure

```text
hrtech-playwright-automation-framework/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── data/
│   └── users.json
│
├── fixtures/
│
├── hrtech-app/
│   ├── src/
│   │   ├── App.tsx
│   │   └── App.css
│   └── package.json
│
├── pages/
│   ├── LoginPage.ts
│   ├── DashboardPage.ts
│   ├── JobsPage.ts
│   ├── AssessmentPage.ts
│   └── CandidatePage.ts
│
├── tests/
│   ├── api/
│   │   └── recruitiq-api.spec.ts
│   └── ui/
│       ├── auth/
│       ├── dashboard/
│       ├── jobs/
│       ├── assessments/
│       └── candidates/
│
├── playwright.config.ts
├── package.json
└── README.md