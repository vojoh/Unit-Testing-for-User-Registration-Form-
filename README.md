# CS362 Unit Testing Project

This repository contains a small JavaScript project used to practice unit and integration testing with Jest. The codebase includes email and password verification utilities plus a Roman-numeral converter implemented using test-driven development (TDD).

## Project structure
- lib/
  - verifyEmail.js        — email validation utility
  - verifyPassword.js     — password validation utility
  - verifyRomanNumeral.js — Roman numeral converter (old-style, additive)
- lib/__tests__/
  - verifyEmail.js
  - verifyPassword.js
  - verifyRomanNumeral.js
- package.json

## Purpose
- Provide well-scoped units to test common validation logic.
- Demonstrate test design, boundary-case coverage, and the AAA (Arrange-Act-Assert) pattern.
- Use TDD to implement the Roman numeral converter and show the TDD workflow via commits.

## How to run
1. Install dependencies:
   npm install

2. Run all tests:
   npm test
   (This invokes Jest as configured in package.json.)

3. Run a single test file:
   npx jest lib/__tests__/verifyEmail.js

## Notes on tests and TDD
- Unit tests should be behavior-driven and cover normal cases and boundaries.
- Tests live in `lib/__tests__` and follow descriptive naming and AAA pattern.
- The Roman numeral converter was developed with TDD; commits should be labeled to show phases, e.g.:
  - "TDD Red: add failing test for X"
  - "TDD Green: implement converter to pass test"
  - "TDD Refactor: cleanup implementation"
- Converter input range: 1–3999. Inputs outside this range are invalid.

## Contributing / Extending
- Add new tests to `lib/__tests__` and keep tests independent and deterministic.
- When extending the Roman converter, continue the TDD cycle and commit after each phase with the required labels.

## Contact / Troubleshooting
- If tests fail, run them with verbose output: `npx jest --runInBand --verbose`.
- Ensure Node and npm versions match those in the development environment.

