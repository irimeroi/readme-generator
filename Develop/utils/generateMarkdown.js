// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    ` ![Github license](https://img.shields.io/badge/license-${license.replace(/ /g,'%20')}-blue.svg)`
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    ` ![Github license](https://img.shields.io/badge/license-${license.replace(/ /g,'%20')}-blue.svg)`
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    ` ![Github license](https://img.shields.io/badge/license-${license.replace(/ /g,'%20')}-blue.svg)`
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectName} 👩‍💻

  ${renderLicenseBadge(data.license)}

  ## Description 📖
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](${renderLicenseLink(data.license)})
  - [Contribuiting](#contribuiting)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation 🛠️
  To install necesary dependencies, run the following command:
  ${data.dependencies}


  ## Usage 💻
  ${data.usage}

  ## License 📜
  ${renderLicenseSection(data.license)}

  ## How to contribuite 🤝
  ${data.contributions}

  ## Tests 🧪
  To run tests, run the following command:
  ${data.tests}

  ## Questions ❓
  If you have any questions about the repository, open an issue or
  contact me directly at ${data.email}. You can find more of my work
  at ${data.github}!
`;
}
module.exports = generateMarkdown;
