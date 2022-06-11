import { Component } from "projen";
import {
  TypescriptConfig,
  TypeScriptCompilerOptions,
} from "projen/lib/javascript";
import { TypeScriptProject } from "projen/lib/typescript";

/**
 * Extends the {@link TypeScriptCompilerOptions} interface with the {@link plugins} property
 * for configuring Language Service Plugins and ts-patch plugins.
 *
 * @see https://github.com/projen/projen/issues/1482
 */
export interface TypeScriptCompilerPlugins {
  /**
   * A list of Language Service and ts-patch plugins to run as part of TypeScript compilation.
   */
  readonly plugins?: TypeScriptPlugin[];
}

/**
 * Configures a Language Service or Transformer Plugin to run as part of TypeScript compilation.
 *
 * @see https://github.com/nonara/ts-patch
 * @see https://github.com/microsoft/TypeScript/wiki/Writing-a-Language-Service-Plugin
 */
export interface TypeScriptPlugin {
  /**
   * Path to a module implementing the ts-patch Transformer Plugin interface.
   *
   * Example:
   * ```ts
   * {
   *   transform: "functionless/lib/compile"
   * }
   * ```
   *
   * @see https://github.com/nonara/ts-patch
   */
  readonly transform?: string;
  /**
   * Name of a NPM module that implements the TypeScript Language Service Plugin interface
   *
   * It must be the name of a NPM module and cannot be a path to an individual JS file.
   *
   * Valid:
   * ```ts
   * {
   *   name: "@functionless/language-service"
   * }
   * ```
   *
   * Invalid:
   * ```ts
   * {
   *   name: "@functionless/language-service/lib/plugin"
   * }
   * ```
   *
   * @see https://github.com/microsoft/TypeScript/wiki/Writing-a-Language-Service-Plugin
   */
  readonly name?: string;
  /**
   * Optional configuration data for the plugin.
   *
   * Example:
   * ```ts
   * {
   *   name: "@functionless/language-service",
   *   // configuration property will be passed to the language service plugin
   *   verbose: true
   * }
   * ```
   */
  readonly [key: string]: any;
}

/**
 * Component that configures a TypeScript project to use Functionless by adding the
 * necessary dependencies and setting up ts-patch.
 */
export class Functionless extends Component {
  static readonly coreDependency = "functionless";
  static readonly languageServiceDependency = "@functionless/language-service";
  static readonly dependencies = [
    Functionless.coreDependency,
    "@aws-cdk/aws-appsync-alpha",
    "typesafe-dynamodb",
  ];
  static readonly devDependencies = [
    "ts-patch",
    Functionless.languageServiceDependency,
  ];

  constructor(readonly tsProject: TypeScriptProject) {
    super(tsProject);

    this.tsProject.addDevDeps(...Functionless.devDependencies);
    this.tsProject.addDeps(...Functionless.dependencies);

    const transformerPlugin = {
      transform: `${Functionless.coreDependency}/lib/compile`,
    };

    const languageServicePlugin = {
      name: Functionless.languageServiceDependency,
    };

    configureTsConfig(this.tsProject.tsconfig, [
      transformerPlugin,
      languageServicePlugin,
    ]);
    configureTsConfig(this.tsProject.tsconfigDev, [transformerPlugin]);

    function configureTsConfig(
      config:
        | undefined
        | (TypescriptConfig & {
            compilerOptions: TypeScriptCompilerOptions &
              TypeScriptCompilerPlugins;
          }),
      plugins: TypeScriptPlugin[]
    ) {
      if (config) {
        // @ts-ignore - hack: write to readonly field (JSII forces us to use readonly)
        config.compilerOptions.plugins = config.compilerOptions.plugins
          ? // copy the array because tsconfig and tsconfigDev are sharing the same data
            // we don't want to rely on that always being true
            [...config.compilerOptions.plugins, ...plugins]
          : [...plugins];
      }
    }

    this.tsProject.addTask("prepare", {
      exec: "ts-patch install -s",
    });
  }
}
