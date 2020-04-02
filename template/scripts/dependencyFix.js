const fs = require('fs');
const fileName = 'package.json';
const file = require('../package.json');

file.devDependencies = {
  "@emotion/core": "^10.0.28",
  "@emotion/styled": "^10.0.27",
  "@svgr/webpack": "^5.3.0",
  "@testing-library/jest-dom": "5.3.0",
  "@testing-library/react": "^10.0.1",
  "@types/enzyme": "^3.10.5",
  "@types/enzyme-adapter-react-16": "^1.0.5",
  "@types/jest": "^25.1.4",
  "@types/node": "12.7.5",
  "@types/react": "16.9.26",
  "@types/react-dom": "16.9.5",
  "@types/react-redux": "^7.1.7",
  "@types/react-router": "^5.1.3",
  "@types/react-router-dom": "^5.1.3",
  "@types/redux-form": "^8.1.7",
  "@types/redux-immutable": "^4.0.1",
  "@types/redux-mock-store": "^1.0.1",
  "@types/uuid": "^3.4.5",
  "@typescript-eslint/eslint-plugin": "2.25.0",
  "@typescript-eslint/parser": "2.25.0",
  "enzyme": "^3.11.0",
  "enzyme-adapter-react-16": "^1.15.2",
  "enzyme-to-json": "^3.4.4",
  "eslint": "^6.8.0",
  "eslint-config-airbnb-typescript": "^7.2.0",
  "eslint-config-prettier": "^6.10.1",
  "eslint-plugin-prettier": "^3.1.2",
  "eslint-plugin-simple-import-sort": "^5.0.2",
  "husky": "^4.2.3",
  "jest": "^24.9.0",
  "jest-emotion": "^10.0.32",
  "jest-environment-enzyme": "^7.1.2",
  "jest-enzyme": "^7.1.2",
  "lint-staged": "10.1.0",
  "prettier": "^2.0.2",
  "react-scripts": "^3.3.0",
  "react-test-renderer": "^16.12.0",
  "redux-mock-store": "^1.5.3",
  "ts-jest": "^24.2.0",
  "typescript": "^3.8.3"
};

for(const dep in file.devDependencies) {
  delete file.dependencies[`${dep}`];
}

fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
  if (err) return console.log(err);

  console.log('Moved packages to devDependencies');
});
