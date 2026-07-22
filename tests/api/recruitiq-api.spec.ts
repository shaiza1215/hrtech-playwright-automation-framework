import { expect, test } from '@playwright/test';

test.describe('RecruitIQ API Tests', () => {
  test('should fetch users successfully', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users');

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.length).toBeGreaterThan(0);
    expect(responseBody[0]).toHaveProperty('id');
    expect(responseBody[0]).toHaveProperty('name');
    expect(responseBody[0]).toHaveProperty('email');
  });

  test('should create a user successfully', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/users', {
      data: {
        name: 'RecruitIQ QA Tester',
        email: 'qa@recruitiq.com',
        role: 'Automation Engineer',
      },
    });

    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    expect(responseBody.name).toBe('RecruitIQ QA Tester');
    expect(responseBody.email).toBe('qa@recruitiq.com');
    expect(responseBody.role).toBe('Automation Engineer');
    expect(responseBody.id).toBeTruthy();
  });

  test('should return not found for invalid user endpoint', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users/999999');

  expect(response.status()).toBe(404);
});
});