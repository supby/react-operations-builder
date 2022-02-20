import { Operation, Args } from "./Operation";

export class Constant extends Operation {
  private value: boolean | undefined;
  constructor(val: boolean | undefined) {
    super();
    this.value = val;
  }

  getValue(args: Args) {
    return this.value;
  }
}
