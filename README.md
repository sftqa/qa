# Playwright portfolio
Sample framework structure including:
- Page objects
- Page fragments
- Object fixtures
- Reporting, including integration with Report portal https://reportportal.io/
- Working with environment variables (supporting multiplie envs like prod, stg)
- Test data approach (just a sample, actual one strongly depends on project needs)
- Execution against different browsers
- Github actions flow to execute tests upon pull request
- Accessibility testing (A11)

Tests are writtent against Sample book store https://demoqa.com/books

Playwright documentation: https://playwright.dev/docs/intro 

## Prerequisites
1. Install Playwright

```shell 
npm install 
npx install playwright
```

2. (Optional) For better experience install following plugin for Visual studio code - ‘Playwright Test for VSCode’

## Run tests from command line
All tests:
```
npx playwright test
```

All tests in headed mode (to see browser):
```
npx playwright test --headed
```

A11 tests:
```
npx playwright test --grep=a11/
```

Functional tests:
```
npx playwright test --grep=functional/
```

Smoke suite tests:
```
npx playwright test --grep=@smoke
```




## Allure report
1. Make sure allure commandline installed https://docs.qameta.io/allure/ 
2. Run tests
3. Generate report:
```
allure generate allure-results -o allure-report --clean
```
4. Open report:
```
allure open allure-report
```