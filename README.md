# Playwright Circle CI
Sample framework structure including:
- Page objects
- Page fragments
- Object fixtures
- Reporting, including integration with Allure
- Working with environment variables (supporting multiplie envs like prod, stg)
- Test data approach (just a sample, actual one strongly depends on project needs)
- Execution against different browsers
- Circle ci actions flow to execute tests upon pull request

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

Functional tests:
```
npx playwright test --grep=functional/
```

Smoke suite tests:
```
npx playwright test --grep=@smoke
```

##Docker
Generate image:
docker build -t playwright-circleci --no-cache  . 

Run image:
docker run -it playwright-circleci:latest


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

## Initial requirements
- playwright, typescript, and allure reporting (zephyr scale integration would be perfectl)
- you create a repo
- create a http://circle.ci account(free)
- create couple of dummy feature files (gherkin)
- must be handle to hooks for each scenario seperately
- test setup and teardown files
- running parallel
- re-run failed test cases
- crossbrowser testing
- be able to run in stage and production environments
- run the test cases on CI when merging feature branch to master branch.. (that process will be integrated with actual product FE, BE repo)
- must use tags for running test suits seperately @smoke -regression
- use environment variables to recieve credentials (either env file and from ci)
- create Dockerfile