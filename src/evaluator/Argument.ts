import { Args, Operation } from "./Operation";

export class Argument extends Operation {
  argName: string | undefined;
  constructor(name: string | undefined) {
    super();
    this.argName = name;
  }

  getValue(args: Args) {
    if (!this.argName) return undefined;

    return args[this.argName];
  }
}
