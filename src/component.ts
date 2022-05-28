import { Component } from "projen";
import { TypeScriptProject } from "projen/lib/typescript";

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
  ];
  static readonly devDependencies = [
    "ts-patch",
    Functionless.languageServiceDependency,
  ];

  constructor(readonly tsProject: TypeScriptProject) {
    super(tsProject);

    this.tsProject.addDevDeps(...Functionless.devDependencies);
    this.tsProject.addDeps(...Functionless.dependencies);

    // TODO: when optional?
    if (this.tsProject.tsconfig) {
      // https://github.com/projen/projen/issues/1482
      // TODO: type
      const compilerOptions = this.tsProject.tsconfig.compilerOptions as any;
      const plugins: any[] = compilerOptions.plugins ?? [];

      plugins.push({
        transform: `${Functionless.coreDependency}/lib/compile`,
      });
      plugins.push({
        name: Functionless.languageServiceDependency,
      });

      compilerOptions.plugins = plugins;
    }

    this.tsProject.addTask("prepare", {
      exec: "ts-patch install -s",
    });
  }
}
