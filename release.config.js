module.exports = {
  branches: ['feature/testing'],
  plugins: [
    '@semantic-release/commit-analyzer',  // Analyzes commits for version bumps
    '@semantic-release/release-notes-generator'  // Generates release notes
  ]
};
