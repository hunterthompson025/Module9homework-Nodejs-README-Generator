// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

##Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

## Installation

${data.installation}

## Usage

${data.usage}

## License

The application is covered under the ${data.license} license.

## Contrubting

${data.contributing}

## Tests

${data.tests}

## Questions

Please reach out for additional questions through email: ${data.email}. For more of my work check out my GitHub page: [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
