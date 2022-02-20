export type Args = { [argname: string]: boolean };

export abstract class Operation {
  abstract getValue(args: Args): boolean | undefined;
}

export function evaluateOperation(
  op: Operation,
  args: Args
): boolean | undefined {
  /* ...todo: implement an evaluator for your operations, 
  given some args */

  return op.getValue(args);
}
