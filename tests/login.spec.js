import { test, expect } from '@playwright/test';

test('Webcast Elite', async ({ page }) => {
  await page.goto('https://demoblaze.com/')

  //console.log(await page.title());

   //Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('STORE')
  await expect(page.locator('a[id="login2"]')).toBeVisible()
  await page.locator('a[id="login2"]').click()
await expect(page.locator('h5[id="logInModalLabel"]')).toBeVisible()
await page.locator('input[id="loginusername"]').fill('your_username');
await page.pause();
  
})