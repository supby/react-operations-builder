import React, { useState } from "react";

type ArgsBuilderProps = {
  onChange: (args: ArgItem[]) => void;
};

type ArgItem = {
  name: string;
  value: boolean;
};

export default function ArgsBuilder({ onChange }: ArgsBuilderProps) {
  const [args, setArgs] = useState<ArgItem[]>([]);

  const onAddClick = () => {
    setArgs([...args, { name: "", value: false }]);
  };
  const onDeleteClick = (index: number) => {
    const newArgs = [...args];
    newArgs.splice(index, 1);

    setArgs(newArgs);
    onChange(newArgs);
  };

  const onArgNameChanged = (newName: string, index: number) => {
    const newArgs = [...args];
    newArgs[index].name = newName;

    setArgs(newArgs);
    onChange(newArgs);
  };
  const onArgValueChanged = (newValue: boolean, index: number) => {
    const newArgs = [...args];
    newArgs[index].value = newValue;
    setArgs(newArgs);

    if (args[index].name) onChange(newArgs);
  };

  return (
    <div>
      {args.map((v, i) => (
        <div key={i}>
          <input
            style={{ width: 60 }}
            type="text"
            onChange={(e) => onArgNameChanged(e.target.value, i)}
            value={v.name}
          ></input>
          <select
            onChange={(e) => onArgValueChanged(e.target.value === "true", i)}
            value={v.value.toString()}
          >
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
          <button onClick={() => onDeleteClick(i)}>X</button>
        </div>
      ))}

      <button onClick={onAddClick}>+ add arg</button>
    </div>
  );
}
