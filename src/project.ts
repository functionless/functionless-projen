import * as path from "path";
import * as fs from "fs-extra";
import { awscdk, Component } from "projen";
import { Functionless } from "./component";

/**
 * Project that wraps an AwsCdkTypeScriptProject and adds configures Functionless.
 */
export class FunctionlessProject extends awscdk.AwsCdkTypeScriptApp {
  constructor(options: awscdk.AwsCdkTypeScriptAppOptions) {
    super({
      ...options,
      sampleCode: false,
      appEntrypoint: "app.ts",
    });

    new SampleCode(this);
    new Functionless(this);
  }
}

/**
 * Sample Functionless code.
 */
class SampleCode extends Component {
  private readonly appProject: awscdk.AwsCdkTypeScriptApp;

  constructor(project: awscdk.AwsCdkTypeScriptApp) {
    super(project);
    this.appProject = project;
  }

  public synthesize() {
    const outdir = this.appProject.outdir;
    const srcdir = path.join(outdir, this.appProject.srcdir);
    if (
      fs.pathExistsSync(srcdir) &&
      fs.readdirSync(srcdir).filter((x: any) => x.endsWith(".ts"))
    ) {
      return;
    }

    const srcCode = `import * as appsync from "@aws-cdk/aws-appsync-alpha";
import { App, aws_dynamodb, Stack } from "aws-cdk-lib";
import { AppsyncResolver, Table } from "functionless";

const app = new App();
const stack = new Stack(app, "stack");

interface Person {
  id: string;
  name: string;
}

const table = new Table<Person, "id">(
  new aws_dynamodb.Table(stack, "Table", {
    partitionKey: {
      name: "itemId",
      type: aws_dynamodb.AttributeType.STRING,
    },
  })
);

const api = new appsync.GraphqlApi(stack, "api", {
  name: "api",
});

const Person = api.addType(
  new appsync.ObjectType("Person", {
    definition: {
      name: appsync.GraphqlType.string(),
    },
  })
);

api.addQuery(
  "getPerson",
  new appsync.Field({
    returnType: Person.attribute(),
    args: {
      id: appsync.GraphqlType.string(),
    },
  })
);

const resolver = new AppsyncResolver(($context) => {
  return table.getItem({
    key: $context.arguments.itemId,
  });
});

resolver.addResolver(api, {
  typeName: "Query",
  fieldName: "getPerson",
});`;

    fs.mkdirpSync(srcdir);
    fs.writeFileSync(path.join(srcdir, this.appProject.appEntrypoint), srcCode);

    const testdir = path.join(outdir, this.appProject.testdir);
    if (
      fs.pathExistsSync(testdir) &&
      fs.readdirSync(testdir).filter((x) => x.endsWith(".ts"))
    ) {
      return;
    }
  }
}
