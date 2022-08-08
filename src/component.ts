import { Component, JsonFile } from "projen";
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
  static readonly astReflectionDependency = "@functionless/ast-reflection";
  static readonly languageServiceDependency = "@functionless/language-service";
  static readonly dependencies = [
    Functionless.coreDependency,
    "@aws-cdk/aws-appsync-alpha",
    "typesafe-dynamodb",
  ];
  static readonly devDependencies = [
    "@swc/cli",
    "@swc/core",
    "@swc/register",
    "@swc/jest",
    Functionless.astReflectionDependency,
    Functionless.languageServiceDependency,
  ];

  readonly swcrc: JsonFile;

  constructor(readonly tsProject: TypeScriptProject) {
    super(tsProject);

    this.swcrc = new JsonFile(tsProject, ".swcrc", {
      obj: {
        jsc: {
          parser: {
            syntax: "typescript",
            dynamicImport: false,
            decorators: false,
            hidden: {
              jest: true,
            },
          },
          transform: null,
          target: "es2021",
          loose: false,
          externalHelpers: false,
          experimental: {
            plugins: [["@functionless/ast-reflection", {}]],
          },
        },
        minify: false,
        sourceMaps: "inline",
        module: {
          type: "commonjs",
        },
      },
    });

    if (this.tsProject.jest) {
      this.tsProject.jest.config.transform = {
        "^.+\\.(t|j)sx?$": ["@swc/jest", {}],
      };
      delete this.tsProject.jest.config.globals;
      delete this.tsProject.jest.config.preset;
    }

    this.tsProject.addDevDeps(...Functionless.devDependencies);
    this.tsProject.addDeps(...Functionless.dependencies);

    const languageServicePlugin = {
      name: Functionless.languageServiceDependency,
    };

    configureTsConfig(this.tsProject.tsconfig, [languageServicePlugin]);
    configureTsConfig(this.tsProject.tsconfigDev, []);

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
  }
}
