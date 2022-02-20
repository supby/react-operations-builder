import React from "react";
import {
  Operation,
  ManyOperation,
  Args,
  ManyOperationType,
  UndefinedOperation
} from "../evaluator";
import OperationBuilder from "./OperationBuilder";

type ManyOpProps = {
  onChange: (op: Operation) => void;
  onDelete: () => void;
  operation: ManyOperation;
  args: Args;
};

export default function ManyOpBuilder({
  onChange,
  onDelete,
  operation,
  args
}: ManyOpProps) {
  const onOperandChange = (op: Operation, index: number) => {
    const newOperands = [...operation.operands];
    newOperands[index] = op;
    onChange(new ManyOperation(newOperands, operation.type));
  };

  const onOperationSelect = (e) => {
    onChange(new ManyOperation(operation.operands, e.target.value));
  };

  const addOpClick = () => {
    onChange(
      new ManyOperation(
        [...operation.operands, new UndefinedOperation()],
        operation.type
      )
    );
  };

  const onDeleteOperand = (index: number) => {
    const newOperands = [...operation.operands];
    newOperands.splice(index, 1);

    onChange(new ManyOperation(newOperands, operation.type));
  };

  return (
    <>
      <select onChange={onOperationSelect} value={operation.type}>
        <option value={ManyOperationType.AND}>and</option>
        <option value={ManyOperationType.OR}>or</option>
      </select>
      <button onClick={onDelete}>X</button>
      <div style={{ marginLeft: 15 }}>
        {operation.operands.map((op, i) => (
          <OperationBuilder
            key={i}
            onChange={(op) => onOperandChange(op, i)}
            onDelete={() => onDeleteOperand(i)}
            args={args}
            operation={op}
          />
        ))}
        <button onClick={addOpClick}>+ add op</button>
      </div>
    </>
  );
}
