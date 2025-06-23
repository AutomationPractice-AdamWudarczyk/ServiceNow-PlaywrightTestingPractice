import { Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('/');
    }

    async login(username: string, password: string) {
        await this.page.fill('input#user_name', username);
        await this.page.fill('input#user_password', password);
        await this.page.click('button#sysverb_login');
        await this.page.waitForLoadState('networkidle');
    }
}