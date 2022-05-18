# @functionless/projen

`@functionless/projen` provides a [projen](https://github.com/projen/projen) project and component for configuring new and existing projects to use `Functionless`.

# Usage

## To create a new project

To create a new `FunctionlessProject`, which wraps a `AwsCdkTypeScriptApp` configured with the `Functionless` compiler plugin, run:

```
npx projen new --from @functionless/projen
```

## To add to an existing project

Install the dependency in your application

```
npm install --save-dev @functionless/projen

OR

yarn add -D @functionless/projen
```

Then apply the `Functionless` component to your project.

```js
const { TypescriptProject } = require("projen-eventual");
const { Functionless } = require("@functionless/projen");

const project = new TypescriptProject({
  ...
});

new Functionless(project);

project.synth();
```
