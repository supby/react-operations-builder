import React from "react";
import { Args, Operation, evaluateOperation } from "../evaluator";

type ResultProps = {
  operation: Operation;
  args: Args;
};
export default function Result({ operation, args }: ResultProps) {
  const getResult = () => {
    const res = evaluateOperation(operation, args);
    if (res === undefined) return "undefined";

    return res.toString();
  };
  return <>Result: {getResult()}</>;
}
