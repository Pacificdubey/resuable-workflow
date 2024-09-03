module.exports = {
  branches: [
    'main',
    { name: 'develop', prerelease: true },
    { name: 'feature/*', prerelease: 'beta' }  // Automatically uses the branch name as the identifier
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    //'@semantic-release/github'
  ]
};
