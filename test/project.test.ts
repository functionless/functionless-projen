import { DependencyType } from "projen";
import { Functionless, FunctionlessProject } from "../src";

test("add dependency and ts plugin", () => {
  const project = new FunctionlessProject({
    name: "test",
    defaultReleaseBranch: "main",
    cdkVersion: "2.0.0",
  });

  Functionless.dependencies.forEach((dep) =>
    expect(project.deps.getDependency(dep)).toBeTruthy()
  );
  Functionless.devDependencies.forEach((dep) =>
    expect(project.deps.getDependency(dep, DependencyType.BUILD)).toBeTruthy()
  );

  expect((project.tsconfig!.compilerOptions as any).plugins).toEqual([
    { name: Functionless.languageServiceDependency },
  ]);
});
