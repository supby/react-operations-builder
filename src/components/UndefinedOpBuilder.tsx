import React from "react";
import {
  Args,
  Argument,
  Operation,
  Constant,
  ManyOperation,
  UndefinedOperation,
  ManyOperationType
} from "../evaluator";

type UndefinedProps = {
  onChange: (op: Operation) => void;
  onDelete: () => void;
};

export default function UndefinedOpBuilder({
  onChange,
  onDelete
}: UndefinedProps) {
  const onOperationSelect = (e) => {
    const selection = e.target.value;
    if (selection === "argument") onChange(new Argument(undefined));

    if (selection === "constant") onChange(new Constant(undefined));

    if (selection === "or")
      onChange(
        new ManyOperation(
          [new UndefinedOperation(), new UndefinedOperation()],
          ManyOperationType.OR
        )
      );

    if (selection === "and")
      onChange(
        new ManyOperation(
          [new UndefinedOperation(), new UndefinedOperation()],
          ManyOperationType.AND
        )
      );
  };

  return (
    <>
      <select onChange={onOperationSelect}>
        <option value="">...</option>
        <option value="constant">constant</option>
        <option value="argument">argument</option>
        <option value="and">and</option>
        <option value="or">or</option>
      </select>
      <button onClick={onDelete}>X</button>
    </>
  );
}
