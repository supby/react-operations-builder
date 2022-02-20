import React from "react";
import {
  Args,
  Argument,
  Operation,
  Constant,
  ManyOperation,
  UndefinedOperation
} from "../evaluator";
import ArgumentOpBuilder from "./ArgumentOpBuilder";
import ConstantOpBuilder from "./ConstantOpBuilder";
import ManyOpBuilder from "./ManyOpBuilder";
import UndefinedOpBuilder from "./UndefinedOpBuilder";

type OperationBuilderProps = {
  args: Args;
  operation: Operation;
  onChange: (op: Operation) => void;
  onDelete: () => void;
};

export default function OperationBuilder({
  args,
  operation,
  onChange,
  onDelete
}: OperationBuilderProps): JSX.Element {
  /* ...todo: an ugly gui for creating operations */

  const renderOperation = () => {
    if (operation.constructor.name === UndefinedOperation.name)
      return <UndefinedOpBuilder onChange={onChange} onDelete={onDelete} />;

    if (operation.constructor.name === Constant.name)
      return (
        <ConstantOpBuilder
          onChange={onChange}
          onDelete={onDelete}
          operation={operation as Constant}
        />
      );

    if (operation.constructor.name === Argument.name)
      return (
        <ArgumentOpBuilder
          onChange={onChange}
          args={args}
          operation={operation as Argument}
          onDelete={onDelete}
        />
      );

    if (operation.constructor.name === ManyOperation.name)
      return (
        <ManyOpBuilder
          onChange={onChange}
          onDelete={onDelete}
          args={args}
          operation={operation as ManyOperation}
        />
      );
  };

  return <div>{renderOperation()}</div>;
}
