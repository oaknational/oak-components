module.exports = {
  branches: ["main"],
  plugins: [
    // Analyse commits.
    // https://github.com/semantic-release/commit-analyzer/#rules-definition
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "angular",
        releaseRules: [
          { type: "chore", release: "patch" },
          { type: "refactor", release: "patch" },
          { type: "docs", release: "patch" },
        ],
      },
      "@semantic-release/release-notes-generator",
      "@semantic-release/npm",
      "@semantic-release/github",
    ],
  ],
};
