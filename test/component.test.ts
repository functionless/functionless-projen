import { DependencyType } from "projen";
import { TypeScriptProject } from "projen/lib/typescript";
import { Functionless } from "../src";

test("add dependency and ts plugin", () => {
  const project = new TypeScriptProject({
    name: "test",
    defaultReleaseBranch: "main",
    tsconfig: {
      compilerOptions: {
        plugins: [
          {
            transform: "some other transform",
          },
        ],
      } as any,
    },
  });

  new Functionless(project);

  Functionless.dependencies.forEach((dep) =>
    expect(project.deps.getDependency(dep)).toBeTruthy()
  );
  Functionless.devDependencies.forEach((dep) =>
    expect(project.deps.getDependency(dep, DependencyType.BUILD)).toBeTruthy()
  );

  expect((project.tsconfig!.compilerOptions as any).plugins).toEqual([
    { transform: "some other transform" },
    { transform: `${Functionless.coreDependency}/lib/compile` },
  ]);
});
