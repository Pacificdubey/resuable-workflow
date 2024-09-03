module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/git",
    [
      "@semantic-release/exec", {
        "publishCmd": "echo ${{nextRelease.version}} > .version"
    }]
  ]
};
