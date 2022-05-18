const { typescript } = require("projen");
const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: "main",
  name: "@functionless/projen",
  description: "projen templates for Functionless projects",
  releaseToNpm: true,

  peerDeps: ["fs-extra", "projen"],
  devDeps: ["@types/fs-extra", "projen"],

  eslintOptions: {
    prettier: true,
  },
});
project.synth();
