import { Component } from "projen";
import { TypeScriptProject } from "projen/lib/typescript";

/**
 * Component that configures a TypeScript project to use Functionless by adding the
 * necessary dependencies and setting up ts-patch.
 */
export class Functionless extends Component {
  static readonly coreDependency = "functionless";
  static readonly dependencies = [
    Functionless.coreDependency,
    "@aws-cdk/aws-appsync-alpha",
  ];
  static readonly devDependencies = ["ts-patch"];

  constructor(readonly project: TypeScriptProject) {
    super(project);

    this.project.addDevDeps(...Functionless.devDependencies);
    this.project.addDeps(...Functionless.dependencies);

    // TODO: when optional?
    if (this.project.tsconfig) {
      // https://github.com/projen/projen/issues/1482
      // TODO: type
      const compilerOptions = this.project.tsconfig.compilerOptions as any;
      const plugins: any[] = compilerOptions.plugins ?? [];

      plugins.push({
        transform: `${Functionless.coreDependency}/lib/compile`,
      });

      compilerOptions.plugins = plugins;
    }

    this.project.addTask("prepare", {
      exec: "ts-patch install -s",
    });
  }
}
