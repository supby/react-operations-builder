import React from "react";
import { Args, Operation, Argument } from "../evaluator";

type ArgumentProps = {
  onChange: (op: Operation) => void;
  onDelete: () => void;
  args: Args;
  operation: Argument;
};
export default function ArgumentOpBuilder({
  onChange,
  args,
  operation,
  onDelete
}: ArgumentProps) {
  const onChangeLoc = (e) => {
    if (!e.target.value) return;

    onChange(new Argument(e.target.value));
  };

  return (
    <>
      <select onChange={onChangeLoc} value={operation.argName}>
        <option value="">...</option>
        {Object.keys(args).map((key, index) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
      <button onClick={onDelete}>X</button>
    </>
  );
}
