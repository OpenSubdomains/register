const assert = require('assert');
const axios = require('axios');

// GitHub API base URL
const GITHUB_API_BASE_URL = 'https://api.github.com/repos/is-a-dev/register/contents/domains';

// Function to validate domain
function validateDomain(content) {
  const domain = content.domain;
  // Check if the domain is 'is-a.dev'
  assert.strictEqual(domain, 'is-a.dev', 'Error: Invalid domain. Only "is-a.dev" is allowed.');
}

// Function to validate subdomain
async function validateSubdomain(content) {
  const subdomain = content.subdomain;

  // Define a regular expression for valid subdomains (only alphanumeric and hyphens, no leading/trailing hyphens)
  const subdomainRegex = /^[a-zA-Z0-9-]+$/;

  // Check if subdomain is valid
  if (!subdomainRegex.test(subdomain)) {
    throw new Error('Error: Invalid subdomain. Only alphanumeric characters and hyphens are allowed, and it cannot start or end with a hyphen.');
  }

  // Check if the subdomain is already taken in the GitHub repository
  const isSubdomainTaken = await checkSubdomainAvailability(subdomain);
  if (isSubdomainTaken) {
    throw new Error(`Error: Subdomain "${subdomain}.is-a.dev" is already taken.`);
  }
}

// Function to check subdomain availability by querying the GitHub API
async function checkSubdomainAvailability(subdomain) {
  try {
    const response = await axios.get(`${GITHUB_API_BASE_URL}/${subdomain}.json`);

    // If the response contains a "name" field, the subdomain is already taken
    if (response.data && response.data.name) {
      return true; // Subdomain is taken
    }

    // If the response doesn't contain a "name" field, the subdomain is available
    return false; // Subdomain is available
  } catch (error) {
    // If there's an error (e.g., the file does not exist), consider the subdomain available
    return false; // Subdomain is available
  }
}

module.exports = {
  validateDomain,
  validateSubdomain,
};
