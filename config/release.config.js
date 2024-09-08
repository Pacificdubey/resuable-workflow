module.exports = {
  branches: [
    "main", // Main branch for production releases
    { name: "develop", prerelease: true }, // Develop branch for prereleases
    { name: "release/*", prerelease: true } // Wildcard for release branches
  ],
  plugins: [
    ["@semantic-release/commit-analyzer", { preset: "conventionalcommits" }],
    ["@semantic-release/release-notes-generator", { preset: "conventionalcommits" }],
    ["@semantic-release/changelog", { changelogFile: "CHANGELOG.md" }],
    ["@semantic-release/git"],
    ["@semantic-release/github"]
  ]
};
