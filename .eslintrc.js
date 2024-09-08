module.exports = {
  root: true,
  extends: ["universe/native"],
  ignorePatterns: ["build"],
  rules: {
    "no-console": "warn",
    "react-hooks/exhaustive-deps": "error",
  },
};
