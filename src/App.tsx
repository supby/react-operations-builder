import React, { useState } from "react";
import { Args, Operation, UndefinedOperation } from "./evaluator";
import { OperationBuilder, ArgsBuilder, Result } from "./components";

/* ...todo:
a system for defining logical operations 
(not, and, or... more if you want) that can be passed:
 - selected args by name: (X and Y)
 - constant values not dependent on args: (true and X)
 - other operations: ((X and Y) or Z) 
 */

export default function App() {
  const [args, setArgs] = useState<Args>({});
  const [operation, setOperation] = useState<Operation>(
    new UndefinedOperation()
  );

  const onArgsChange = (
    argsList: {
      name: string;
      value: boolean;
    }[]
  ) => {
    const newArgs = argsList.reduce((acc: Args, v) => {
      acc[v.name] = v.value;
      return acc;
    }, {});
    setArgs(newArgs);
  };

  const onOperationChanged = (op: Operation) => {
    setOperation(op);
  };

  const onOperationDelete = () => {
    setOperation(new UndefinedOperation());
  };

  return (
    <>
      <ArgsBuilder onChange={onArgsChange} />
      <br />
      <OperationBuilder
        onChange={onOperationChanged}
        onDelete={onOperationDelete}
        args={args}
        operation={operation}
      />
      <br />
      <Result operation={operation} args={args} />
    </>
  );
}
