# @functionless/projen

`@functionless/projen` provides a [projen](https://github.com/projen/projen) project and component for configuring new and existing projects to use `Functionless`.

# Usage

Install the dependency in your application

```
npm install --save-dev @functionless/projen

OR

yarn add -D @functionless/projen
```

## To create a new project

TODO

## To add to an existing project

Apply the `Functionless` component to your project.

```js
const { TypescriptProject } = require("projen-eventual");
const { Functionless } = require("@functionless/projen");

const project = new TypescriptProject({
  ...
});

new Functionless(project);

project.synth();
```
