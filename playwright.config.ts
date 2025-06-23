import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    use: {
        headless: false, // uruchom przeglądarkę w trybie widocznym
        baseURL: 'https://dev283292.service-now.com', // Twoja instancja ServiceNow
        viewport: { width: 1280, height: 720 },
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
    reporter: [['html', { outputFolder: 'playwright-report' }]],
});