# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### TypeScriptCompilerPlugins <a name="TypeScriptCompilerPlugins" id="@functionless/projen.TypeScriptCompilerPlugins"></a>

Extends the {@link TypeScriptCompilerOptions} interface with the {@link plugins} property for configuring Language Service Plugins and ts-patch plugins.

> [https://github.com/projen/projen/issues/1482](https://github.com/projen/projen/issues/1482)

#### Initializer <a name="Initializer" id="@functionless/projen.TypeScriptCompilerPlugins.Initializer"></a>

```typescript
import { TypeScriptCompilerPlugins } from '@functionless/projen'

const typeScriptCompilerPlugins: TypeScriptCompilerPlugins = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@functionless/projen.TypeScriptCompilerPlugins.property.plugins">plugins</a></code> | <code><a href="#@functionless/projen.TypeScriptPlugin">TypeScriptPlugin</a>[]</code> | A list of Language Service and ts-patch plugins to run as part of TypeScript compilation. |

---

##### `plugins`<sup>Optional</sup> <a name="plugins" id="@functionless/projen.TypeScriptCompilerPlugins.property.plugins"></a>

```typescript
public readonly plugins: TypeScriptPlugin[];
```

- *Type:* <a href="#@functionless/projen.TypeScriptPlugin">TypeScriptPlugin</a>[]

A list of Language Service and ts-patch plugins to run as part of TypeScript compilation.

---

### TypeScriptPlugin <a name="TypeScriptPlugin" id="@functionless/projen.TypeScriptPlugin"></a>

Configures a Language Service or Transformer Plugin to run as part of TypeScript compilation.

> [https://github.com/microsoft/TypeScript/wiki/Writing-a-Language-Service-Plugin](https://github.com/microsoft/TypeScript/wiki/Writing-a-Language-Service-Plugin)

#### Initializer <a name="Initializer" id="@functionless/projen.TypeScriptPlugin.Initializer"></a>

```typescript
import { TypeScriptPlugin } from '@functionless/projen'

const typeScriptPlugin: TypeScriptPlugin = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@functionless/projen.TypeScriptPlugin.property.name">name</a></code> | <code>string</code> | Name of a NPM module that implements the TypeScript Language Service Plugin interface. |
| <code><a href="#@functionless/projen.TypeScriptPlugin.property.transform">transform</a></code> | <code>string</code> | Path to a module implementing the ts-patch Transformer Plugin interface. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@functionless/projen.TypeScriptPlugin.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of a NPM module that implements the TypeScript Language Service Plugin interface.

It must be the name of a NPM module and cannot be a path to an individual JS file.

Valid:
```ts
{
   name: "@functionless/language-service"
}
```

Invalid:
```ts
{
   name: "@functionless/language-service/lib/plugin"
}
```

> [https://github.com/microsoft/TypeScript/wiki/Writing-a-Language-Service-Plugin](https://github.com/microsoft/TypeScript/wiki/Writing-a-Language-Service-Plugin)

---

##### `transform`<sup>Optional</sup> <a name="transform" id="@functionless/projen.TypeScriptPlugin.property.transform"></a>

```typescript
public readonly transform: string;
```

- *Type:* string

Path to a module implementing the ts-patch Transformer Plugin interface.

Example:
```ts
{
   transform: "functionless/lib/compile"
}
```

> [https://github.com/nonara/ts-patch](https://github.com/nonara/ts-patch)

---

## Classes <a name="Classes" id="Classes"></a>

### Functionless <a name="Functionless" id="@functionless/projen.Functionless"></a>

Component that configures a TypeScript project to use Functionless by adding the necessary dependencies and setting up ts-patch.

#### Initializers <a name="Initializers" id="@functionless/projen.Functionless.Initializer"></a>

```typescript
import { Functionless } from '@functionless/projen'

new Functionless(tsProject: TypeScriptProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@functionless/projen.Functionless.Initializer.parameter.tsProject">tsProject</a></code> | <code>projen.typescript.TypeScriptProject</code> | *No description.* |

---

##### `tsProject`<sup>Required</sup> <a name="tsProject" id="@functionless/projen.Functionless.Initializer.parameter.tsProject"></a>

- *Type:* projen.typescript.TypeScriptProject

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@functionless/projen.Functionless.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@functionless/projen.Functionless.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@functionless/projen.Functionless.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `postSynthesize` <a name="postSynthesize" id="@functionless/projen.Functionless.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@functionless/projen.Functionless.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@functionless/projen.Functionless.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@functionless/projen.Functionless.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@functionless/projen.Functionless.property.swcrc">swcrc</a></code> | <code>projen.JsonFile</code> | *No description.* |
| <code><a href="#@functionless/projen.Functionless.property.tsProject">tsProject</a></code> | <code>projen.typescript.TypeScriptProject</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@functionless/projen.Functionless.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `swcrc`<sup>Required</sup> <a name="swcrc" id="@functionless/projen.Functionless.property.swcrc"></a>

```typescript
public readonly swcrc: JsonFile;
```

- *Type:* projen.JsonFile

---

##### `tsProject`<sup>Required</sup> <a name="tsProject" id="@functionless/projen.Functionless.property.tsProject"></a>

```typescript
public readonly tsProject: TypeScriptProject;
```

- *Type:* projen.typescript.TypeScriptProject

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@functionless/projen.Functionless.property.astReflectionDependency">astReflectionDependency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@functionless/projen.Functionless.property.coreDependency">coreDependency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@functionless/projen.Functionless.property.dependencies">dependencies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@functionless/projen.Functionless.property.devDependencies">devDependencies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@functionless/projen.Functionless.property.languageServiceDependency">languageServiceDependency</a></code> | <code>string</code> | *No description.* |

---

##### `astReflectionDependency`<sup>Required</sup> <a name="astReflectionDependency" id="@functionless/projen.Functionless.property.astReflectionDependency"></a>

```typescript
public readonly astReflectionDependency: string;
```

- *Type:* string

---

##### `coreDependency`<sup>Required</sup> <a name="coreDependency" id="@functionless/projen.Functionless.property.coreDependency"></a>

```typescript
public readonly coreDependency: string;
```

- *Type:* string

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@functionless/projen.Functionless.property.dependencies"></a>

```typescript
public readonly dependencies: string[];
```

- *Type:* string[]

---

##### `devDependencies`<sup>Required</sup> <a name="devDependencies" id="@functionless/projen.Functionless.property.devDependencies"></a>

```typescript
public readonly devDependencies: string[];
```

- *Type:* string[]

---

##### `languageServiceDependency`<sup>Required</sup> <a name="languageServiceDependency" id="@functionless/projen.Functionless.property.languageServiceDependency"></a>

```typescript
public readonly languageServiceDependency: string;
```

- *Type:* string

---

### FunctionlessProject <a name="FunctionlessProject" id="@functionless/projen.FunctionlessProject"></a>

Project that wraps an AwsCdkTypeScriptProject and adds configures Functionless.

#### Initializers <a name="Initializers" id="@functionless/projen.FunctionlessProject.Initializer"></a>

```typescript
import { FunctionlessProject } from '@functionless/projen'

new FunctionlessProject(options: AwsCdkTypeScriptAppOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@functionless/projen.FunctionlessProject.Initializer.parameter.options">options</a></code> | <code>projen.awscdk.AwsCdkTypeScriptAppOptions</code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@functionless/projen.FunctionlessProject.Initializer.parameter.options"></a>

- *Type:* projen.awscdk.AwsCdkTypeScriptAppOptions

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@functionless/projen.FunctionlessProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@functionless/projen.FunctionlessProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@functionless/projen.FunctionlessProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@functionless/projen.FunctionlessProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@functionless/projen.FunctionlessProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@functionless/projen.FunctionlessProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@functionless/projen.FunctionlessProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@functionless/projen.FunctionlessProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@functionless/projen.FunctionlessProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@functionless/projen.FunctionlessProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@functionless/projen.FunctionlessProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@functionless/projen.FunctionlessProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@functionless/projen.FunctionlessProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@functionless/projen.FunctionlessProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@functionless/projen.FunctionlessProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@functionless/projen.FunctionlessProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@functionless/projen.FunctionlessProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@functionless/projen.FunctionlessProject.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@functionless/projen.FunctionlessProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@functionless/projen.FunctionlessProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@functionless/projen.FunctionlessProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@functionless/projen.FunctionlessProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@functionless/projen.FunctionlessProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@functionless/projen.FunctionlessProject.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@functionless/projen.FunctionlessProject.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@functionless/projen.FunctionlessProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@functionless/projen.FunctionlessProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@functionless/projen.FunctionlessProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |
| <code><a href="#@functionless/projen.FunctionlessProject.addCdkDependency">addCdkDependency</a></code> | Adds an AWS CDK module dependencies. |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@functionless/projen.FunctionlessProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@functionless/projen.FunctionlessProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@functionless/projen.FunctionlessProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@functionless/projen.FunctionlessProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@functionless/projen.FunctionlessProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@functionless/projen.FunctionlessProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

---

##### `addTask` <a name="addTask" id="@functionless/projen.FunctionlessProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@functionless/projen.FunctionlessProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@functionless/projen.FunctionlessProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@functionless/projen.FunctionlessProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@functionless/projen.FunctionlessProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@functionless/projen.FunctionlessProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@functionless/projen.FunctionlessProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@functionless/projen.FunctionlessProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@functionless/projen.FunctionlessProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@functionless/projen.FunctionlessProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@functionless/projen.FunctionlessProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@functionless/projen.FunctionlessProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@functionless/projen.FunctionlessProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@functionless/projen.FunctionlessProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all sub-projects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@functionless/projen.FunctionlessProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@functionless/projen.FunctionlessProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@functionless/projen.FunctionlessProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@functionless/projen.FunctionlessProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@functionless/projen.FunctionlessProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@functionless/projen.FunctionlessProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@functionless/projen.FunctionlessProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@functionless/projen.FunctionlessProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@functionless/projen.FunctionlessProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@functionless/projen.FunctionlessProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@functionless/projen.FunctionlessProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@functionless/projen.FunctionlessProject.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@functionless/projen.FunctionlessProject.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@functionless/projen.FunctionlessProject.addCompileCommand.parameter.commands"></a>

- *Type:* string

---

##### `addDeps` <a name="addDeps" id="@functionless/projen.FunctionlessProject.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@functionless/projen.FunctionlessProject.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@functionless/projen.FunctionlessProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@functionless/projen.FunctionlessProject.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@functionless/projen.FunctionlessProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@functionless/projen.FunctionlessProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@functionless/projen.FunctionlessProject.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@functionless/projen.FunctionlessProject.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@functionless/projen.FunctionlessProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@functionless/projen.FunctionlessProject.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@functionless/projen.FunctionlessProject.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@functionless/projen.FunctionlessProject.addTestCommand.parameter.commands"></a>

- *Type:* string

---

##### `hasScript` <a name="hasScript" id="@functionless/projen.FunctionlessProject.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@functionless/projen.FunctionlessProject.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@functionless/projen.FunctionlessProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@functionless/projen.FunctionlessProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@functionless/projen.FunctionlessProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@functionless/projen.FunctionlessProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@functionless/projen.FunctionlessProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@functionless/projen.FunctionlessProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@functionless/projen.FunctionlessProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

##### `addCdkDependency` <a name="addCdkDependency" id="@functionless/projen.FunctionlessProject.addCdkDependency"></a>

```typescript
public addCdkDependency(modules: string): void
```

Adds an AWS CDK module dependencies.

###### `modules`<sup>Required</sup> <a name="modules" id="@functionless/projen.FunctionlessProject.addCdkDependency.parameter.modules"></a>

- *Type:* string

The list of modules to depend on.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@functionless/projen.FunctionlessProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@functionless/projen.FunctionlessProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@functionless/projen.FunctionlessProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@functionless/projen.FunctionlessProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@functionless/projen.FunctionlessProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@functionless/projen.FunctionlessProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@functionless/projen.FunctionlessProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@functionless/projen.FunctionlessProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@functionless/projen.FunctionlessProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@functionless/projen.FunctionlessProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@functionless/projen.FunctionlessProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@functionless/projen.FunctionlessProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@functionless/projen.FunctionlessProject.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@functionless/projen.FunctionlessProject.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@functionless/projen.FunctionlessProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@functionless/projen.FunctionlessProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@functionless/projen.FunctionlessProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version required by this pacakge. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum node.js version required by this package. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@functionless/projen.FunctionlessProject.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@functionless/projen.FunctionlessProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@functionless/projen.FunctionlessProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@functionless/projen.FunctionlessProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@functionless/projen.FunctionlessProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@functionless/projen.FunctionlessProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@functionless/projen.FunctionlessProject.property.appEntrypoint">appEntrypoint</a></code> | <code>string</code> | The CDK app entrypoint. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.cdkConfig">cdkConfig</a></code> | <code>projen.awscdk.CdkConfig</code> | cdk.json configuration. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.cdkDeps">cdkDeps</a></code> | <code>projen.awscdk.AwsCdkDeps</code> | *No description.* |
| <code><a href="#@functionless/projen.FunctionlessProject.property.cdkTasks">cdkTasks</a></code> | <code>projen.awscdk.CdkTasks</code> | Common CDK tasks. |
| <code><a href="#@functionless/projen.FunctionlessProject.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | The CDK version this app is using. |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@functionless/projen.FunctionlessProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@functionless/projen.FunctionlessProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@functionless/projen.FunctionlessProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@functionless/projen.FunctionlessProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@functionless/projen.FunctionlessProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@functionless/projen.FunctionlessProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@functionless/projen.FunctionlessProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@functionless/projen.FunctionlessProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@functionless/projen.FunctionlessProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@functionless/projen.FunctionlessProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@functionless/projen.FunctionlessProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@functionless/projen.FunctionlessProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@functionless/projen.FunctionlessProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@functionless/projen.FunctionlessProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@functionless/projen.FunctionlessProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@functionless/projen.FunctionlessProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@functionless/projen.FunctionlessProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@functionless/projen.FunctionlessProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@functionless/projen.FunctionlessProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@functionless/projen.FunctionlessProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@functionless/projen.FunctionlessProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@functionless/projen.FunctionlessProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@functionless/projen.FunctionlessProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@functionless/projen.FunctionlessProject.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@functionless/projen.FunctionlessProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@functionless/projen.FunctionlessProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@functionless/projen.FunctionlessProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@functionless/projen.FunctionlessProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@functionless/projen.FunctionlessProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@functionless/projen.FunctionlessProject.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@functionless/projen.FunctionlessProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@functionless/projen.FunctionlessProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@functionless/projen.FunctionlessProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@functionless/projen.FunctionlessProject.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@functionless/projen.FunctionlessProject.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `package`<sup>Required</sup> <a name="package" id="@functionless/projen.FunctionlessProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@functionless/projen.FunctionlessProject.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@functionless/projen.FunctionlessProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@functionless/projen.FunctionlessProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@functionless/projen.FunctionlessProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@functionless/projen.FunctionlessProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@functionless/projen.FunctionlessProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@functionless/projen.FunctionlessProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version required by this pacakge.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@functionless/projen.FunctionlessProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

Minimum node.js version required by this package.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@functionless/projen.FunctionlessProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@functionless/projen.FunctionlessProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@functionless/projen.FunctionlessProject.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@functionless/projen.FunctionlessProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@functionless/projen.FunctionlessProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@functionless/projen.FunctionlessProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@functionless/projen.FunctionlessProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@functionless/projen.FunctionlessProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@functionless/projen.FunctionlessProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@functionless/projen.FunctionlessProject.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@functionless/projen.FunctionlessProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@functionless/projen.FunctionlessProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@functionless/projen.FunctionlessProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@functionless/projen.FunctionlessProject.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@functionless/projen.FunctionlessProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `appEntrypoint`<sup>Required</sup> <a name="appEntrypoint" id="@functionless/projen.FunctionlessProject.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* string

The CDK app entrypoint.

---

##### `cdkConfig`<sup>Required</sup> <a name="cdkConfig" id="@functionless/projen.FunctionlessProject.property.cdkConfig"></a>

```typescript
public readonly cdkConfig: CdkConfig;
```

- *Type:* projen.awscdk.CdkConfig

cdk.json configuration.

---

##### `cdkDeps`<sup>Required</sup> <a name="cdkDeps" id="@functionless/projen.FunctionlessProject.property.cdkDeps"></a>

```typescript
public readonly cdkDeps: AwsCdkDeps;
```

- *Type:* projen.awscdk.AwsCdkDeps

---

##### `cdkTasks`<sup>Required</sup> <a name="cdkTasks" id="@functionless/projen.FunctionlessProject.property.cdkTasks"></a>

```typescript
public readonly cdkTasks: CdkTasks;
```

- *Type:* projen.awscdk.CdkTasks

Common CDK tasks.

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="@functionless/projen.FunctionlessProject.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string

The CDK version this app is using.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@functionless/projen.FunctionlessProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@functionless/projen.FunctionlessProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---


