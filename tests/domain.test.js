const assert = require('assert');
const axios = require('axios');

// GitHub API base URL
const GITHUB_API_BASE_URL = 'https://api.github.com/repos/is-a-dev/register/contents/domains';

/**
 * Handles errors during validation.
 * Logs the error and exits the process with failure.
 * @param {string} message - The error message to log.
 */
function handleError(message) {
  console.error(`Validation Error: ${message}`);
  process.exit(1); // Exit with failure
}

// Function to validate the domain
function validateDomain(content) {
  const domain = content.domain;

  try {
    // Check if the domain is 'is-a.dev'
    assert.strictEqual(domain, 'is-a.dev', 'Error: Invalid domain. Only "is-a.dev" is allowed.');
  } catch (error) {
    handleError(error.message);
  }
}

// Function to validate the subdomain
async function validateSubdomain(content) {
  const subdomain = content.subdomain;

  // Define a regular expression for valid subdomains
  const subdomainRegex = /^[a-zA-Z0-9-]+$/;

  try {
    // Validate subdomain format
    if (!subdomainRegex.test(subdomain) || subdomain.startsWith('-') || subdomain.endsWith('-')) {
      throw new Error(
        'Invalid subdomain. Only alphanumeric characters and hyphens are allowed, and it cannot start or end with a hyphen.'
      );
    }

    // Check if the subdomain is already taken
    const isSubdomainTaken = await checkSubdomainAvailability(subdomain);
    if (isSubdomainTaken) {
      throw new Error(`Subdomain "${subdomain}.is-a.dev" is already taken.`);
    }
  } catch (error) {
    handleError(error.message);
  }
}

// Function to check subdomain availability by querying the GitHub API
async function checkSubdomainAvailability(subdomain) {
  try {
    const response = await axios.get(`${GITHUB_API_BASE_URL}/${subdomain}.json`);
    return response.data && response.data.name ? true : false; // Subdomain is taken
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return false; // Subdomain is available
    }
    throw new Error(`Error checking subdomain availability: ${error.message}`);
  }
}

module.exports = {
  validateDomain,
  validateSubdomain,
};
