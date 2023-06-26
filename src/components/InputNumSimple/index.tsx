import { NumberInput, NumberInputField, Text } from "@chakra-ui/react";
import React, { useState } from "react";

type InputNumSimpleProps = {
  initialValue: string;
};

const format = (val: string) => `$` + val;
const parse = (val: string) => val.replace(/^\$/, "");

const InputNumSimple: React.FC<InputNumSimpleProps> = ({ initialValue }) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [value, setValue] = useState<string>(parse(initialValue));

  return isEditable ? (
    <NumberInput
      onChange={(valueNumber: string) => setValue(parse(valueNumber))}
      value={format(value)}
      onBlur={() => setIsEditable(false)}
      autoFocus
    >
      <NumberInputField />
    </NumberInput>
  ) : (
    <Text onClick={() => setIsEditable(true)}>{format(value)}</Text>
  );
};

export default InputNumSimple;
