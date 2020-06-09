const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();

  await page.setViewport({
    width: 375,
    height: 667,
    deviceScaleFactor: 1,
    hasTouch: true,
    isLandscape: false,
    isMobile: true,
  });

  await page.goto('http://i.meituan.com/', {
    waitUntil: 'networkidle0'
  });
  await page.screenshot({
    path: `assets/meituan/1首页弹窗.png` //保存截图路径
  });
  await page.waitFor(1000);

  await page.click('.msg-btn-ok', {
    waitUntil: 'networkidle0'
  });
  await page.screenshot({
    path: `assets/meituan/2首页.png` //保存截图路径
  });
  await page.waitFor(1000);

  await page.click('#guessLike dd dl dd', {
    waitUntil: 'networkidle0'
  });
  await page.screenshot({
    path: `assets/meituan/3订单页.png` //保存截图路径
  });
  await page.waitFor(1000);

  await page.click('.buy-btn', {
    waitUntil: 'networkidle0'
  });
  await page.screenshot({
    path: `assets/meituan/4下单.png` //保存截图路径
  });
  await page.waitFor(1000);


  await page.click('.quick-login a', {
    waitUntil: 'networkidle0'
  });
  await page.screenshot({
    path: `assets/meituan/5登录页.png` //保存截图路径
  });
  await page.waitFor(1000);

  await page.$eval('#username', input => input.value = 16666666666, {
    delay: 100
  });
  await page.screenshot({
    path: `assets/meituan/6输入账号.png` //保存截图路径
  });
  await page.waitFor(1000);

  await page.$eval('#password', input => input.value = '********', {
    delay: 100
  });
  await page.screenshot({
    path: `assets/meituan/7输入密码.png` //保存截图路径
  });
  await page.waitFor(1000);

  await page.click('.login-btn', {
    waitUntil: 'networkidle0'
  });
  await page.screenshot({
    path: `assets/meituan/8登录成功.png` //保存截图路径
  });
  await page.waitFor(1000);

  await page.waitFor(5000);

  await browser.close();
})();