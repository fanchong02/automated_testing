const puppeteer = require('puppeteer');

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

  await page.goto('file:///Users/Touch/F_Projects/Puppeteer/index.shtml?1');
  // await page.pdf({ path: 'index.pdf', format: 'A3' });

  await page.click('button');
  await page.screenshot({
    fullPage: true,
    path: `验证空name.png` //保存截图路径
  });
  await page.waitFor(1000);

  await page.type('.name', '测试-樊冲测试长度测试长度，一共21个字符', {
    delay: 100
  });
  await page.click('button');
  await page.screenshot({
    fullPage: true,
    path: `验证name超长.png` //保存截图路径
  });
  await page.waitFor(1000);

  await page.$eval('.name', input => input.value = '测试-20字符以内', {
    delay: 100
  });
  await page.click('button');
  await page.screenshot({
    fullPage: true,
    path: `验证空name符合标准.png` //保存截图路径
  });
  await page.waitFor(1000);

  await page.$eval('.age', input => input.value = -10, {
    delay: 100
  });
  await page.click('button');
  await page.screenshot({
    fullPage: true,
    path: `验证age 为 负数.png` //保存截图路径
  });
  await page.waitFor(1000);

  await page.$eval('.age', input => input.value = 0);
  await page.click('button');
  await page.screenshot({
    fullPage: true,
    path: `验证age为0.png` //保存截图路径
  });
  await page.waitFor(1000);

  await page.$eval('.age', input => input.value = 10000);
  await page.click('button');
  await page.screenshot({
    fullPage: true,
    path: `验证age为大于1000.png` //保存截图路径
  });
  await page.waitFor(1000);

  await page.$eval('.age', input => input.value = 10);
  await page.click('button');
  await page.screenshot({
    fullPage: true,
    path: `验证age符合标准.png` //保存截图路径
  });
  await page.waitFor(1000);

  await page.type('.desc', '次数多了放假了时代峻峰链接上的废旧塑料的法律快速搭建傅雷家书砥砺奋进老实交代飞机上东方嘉盛看得见风决胜巅峰次数多了放假了时代峻峰链接上的废旧塑料的法律快速搭建傅雷家书砥砺奋进老实交代飞机上东方嘉盛看得见风决胜巅峰次数多了放假了时代峻峰链接上的废旧塑料的法律快速搭建傅雷家书砥砺奋进老实交代飞机上东方嘉盛看得见风决胜巅峰次数多了放假了时代峻峰链接上的废旧塑料的法律快速搭建傅雷家书砥砺奋进老实交代飞机上东方嘉盛看得见风决胜巅峰次数多了放假了时代峻峰链接上的废旧塑料的法律快速搭建傅雷家书砥砺奋进老实交代飞机上东方嘉盛看得见风决胜巅峰次数多了放假了时代峻峰链接上的废旧塑料的法律快速搭建傅雷家书砥砺奋进老实交代飞机上东方嘉盛看得见风决胜巅峰', {
    delay: 10
  });
  await page.click('button');
  await page.screenshot({
    fullPage: true,
    path: `验证desc超长.png` //保存截图路径
  });
  await page.waitFor(1000);

  await page.$eval('.desc', input => input.value = '这才是我的个人介绍', {
    delay: 10
  });
  await page.click('button');
  await page.screenshot({
    fullPage: true,
    path: `验证desc符合标准.png` //保存截图路径
  });

  await page.screenshot({
    fullPage: true,
    path: `${await page.title()}.png` //保存截图路径
  });
  await page.waitFor(5000);



  console.log(await page.title());

  console.log(await page.url());

  // console.log();

  await browser.close();
})();