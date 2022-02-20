import React from "react";
import { Operation, Constant } from "../evaluator";

type ConstantProps = {
  onChange: (op: Operation) => void;
  onDelete: () => void;
  operation: Constant;
};

export default function ConstantOpBuilder({
  onChange,
  onDelete,
  operation
}: ConstantProps) {
  const onChangeLoc = (e) => {
    onChange(new Constant(e.target.value === "true"));
  };

  const selectedValue =
    operation.getValue() === undefined ? "" : operation.getValue()?.toString();

  return (
    <>
      <select onChange={onChangeLoc} value={selectedValue}>
        <option value="">...</option>
        <option value="true">true</option>
        <option value="false">false</option>
      </select>
      <button onClick={onDelete}>X</button>
    </>
  );
}
