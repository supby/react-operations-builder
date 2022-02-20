import { Args, Operation } from "./Operation";

export enum ManyOperationType {
  AND,
  OR
}

export class ManyOperation extends Operation {
  type: ManyOperationType;
  operands: Operation[];

  private opMap: Record<
    ManyOperationType,
    (a: boolean, b: boolean) => boolean
  > = {
    [ManyOperationType.AND]: (a, b) => a && b,
    [ManyOperationType.OR]: (a, b) => a || b
  };

  constructor(operands: Operation[], type: ManyOperationType) {
    super();

    this.type = type;
    this.operands = operands;
  }

  private evaluatePair(
    a: boolean | undefined,
    b: boolean | undefined
  ): boolean | undefined {
    if (a === undefined || b === undefined) return undefined;

    return this.opMap[this.type](a, b);
  }

  getValue(args: Args) {
    if (this.operands.length < 2) return undefined;

    return this.operands.reduce(
      (acc, el) => this.evaluatePair(acc, el.getValue(args)),
      this.operands[0].getValue(args)
    );
  }
}
