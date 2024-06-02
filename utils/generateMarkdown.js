// A function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  switch (license) {
      case 'MIT':
          return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      case 'APACHE 2.0':
          return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
      case 'GPL 3.0':
          return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      case 'BSD 3':
          return '![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
      default:
          return '';
  }
}

// A function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  switch (license) {
      case 'MIT':
          return 'https://opensource.org/licenses/MIT';
      case 'APACHE 2.0':
          return 'https://www.apache.org/licenses/LICENSE-2.0';
      case 'GPL 3.0':
          return 'https://www.gnu.org/licenses/gpl-3.0';
      case 'BSD 3':
          return 'https://opensource.org/licenses/BSD-3-Clause';
      default:
          return '';
  }
}


// A function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  if (!license) {
      return '';
  }

  return `
## License

This project is licensed under the ${license} License. For more information, please visit [this link](${renderLicenseLink(license)}).
  `;
}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

## Installation

Enter ${data.installation} in the command line to install your dependencies.

## Usage

${data.usage}

${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}

## Contrubting

${data.contributing}

## Tests

Enter ${data.tests} into the command line to test.

## Questions

Please reach out for additional questions through email: ${data.email}. For more of my work check out my GitHub page: [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
