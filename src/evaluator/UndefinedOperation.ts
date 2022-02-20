import { Operation, Args } from "./Operation";

export class UndefinedOperation extends Operation {
  getValue(args: Args) {
    return undefined;
  }
}
