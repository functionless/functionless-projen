const { cdk } = require("projen");

const project = new cdk.JsiiProject({
  defaultReleaseBranch: "main",
  name: "@functionless/projen",
  description: "Projen templates for Functionless projects",
  author: "sam@functionless.org",
  repository: "https://github.com/functionless/projen.git",

  releaseToNpm: true,
  npmAccess: "public",

  peerDeps: ["projen"],
  devDeps: ["@types/fs-extra", "projen"],
  bundledDeps: ["fs-extra"],

  eslintOptions: {
    prettier: true,
  },
});

project.synth();
