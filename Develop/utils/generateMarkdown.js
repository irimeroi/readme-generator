// function that returns a license badge
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return ` ![Github license](https://img.shields.io/badge/license-${license.replace(/ /g,'%20')}-blue.svg)`
  }
  return '';
}

// function that returns the license link
function renderLicenseLink(license) {
  if (license !== 'None') {
    return '- [License](#license📜)'
  }
  return '';
}

// function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License📜
The license of this project is: ${license}`
  }
  return '';
}

// function that generates markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectName} 👩‍💻

  ${renderLicenseBadge(data.license)}

  ## Description 📖
  ${data.description}

  ## Table of Contents
  - [Installation](#installation🛠️)
  - [Usage](#usage💻)
  ${renderLicenseLink(data.license)}
  - [Contribuiting](#contributing🤝)
  - [Tests](#tests🧪)
  - [Questions](#questions❓)

  ## Installation🛠️
  To install necesary dependencies, run the following command:
  ${data.dependencies}

  ## Usage💻
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing🤝
  ${data.contributions}

  ## Tests🧪
  To run tests, run the following command:
  ${data.tests}

  ## Questions❓
  If you have any questions about the repository, please open an issue or
  email me directly at [${data.email}](mailto:${data.email}). You can find more of my work
  at [${data.github}](https://github.com/${data.github})!
`;
}

//exports the module to global scope
module.exports = generateMarkdown;