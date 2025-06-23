import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/login/loginPage';
import credentials from '@fixtures/loginToSNCredentials.json';

test('Login to ServiceNow instance with fixture credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(credentials.validCredentialsLogintoSN.username, credentials.validCredentialsLogintoSN.password);

    await expect(page).toHaveURL('https://dev283292.service-now.com/now/nav/ui/classic/params/target/ui_page.do%3Fsys_id%3D21f328cfc3062210e213be13e4013107');
    page.locator('xpath=//div[contains(., "Creator Studio")]')
});