# multiple-environments-with-different-values

Sample project to demonstrate how to run Cypress tests on multiple environments using command line envs.

## Pre-requirements

It is required to have Nodejs and NPM installed to run this project.

> I used versions `v18.13.0` and `8.19.3` of Nodejs and npm, respectively. I suggest you use the same or later LTS versions.

## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.

## Tests

In this project, you can run tests against two different environments (blue and gray).

### Blue

Run `npm run test:blue` to run the tests in headless mode against the blue environment.

Or run `npm run cy:open:blue` to open Cypress in interactive mode and run the tests against the blue environment.

### Gray

Run `npm run test:gray` to run the tests in headless mode against the gray environment.

Or run `npm run cy:open:gray` to open Cypress in interactive mode and run the tests against the gray environment.

## Support this project

If you want to support this project, leave a ⭐.

___

This project was created with 💜 by [Walmyr](https://walmyr.dev).
