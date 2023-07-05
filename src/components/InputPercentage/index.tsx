import { NumberInput, NumberInputField, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { CurrentUserContext, UserContext } from "../../providers/UserContext";

type InputPercentageProps = {
  initialValue: string;
  id: string;
  columnType: "utilization" | "interest";
  actionType: "EDIT_RECURRING" | "EDIT_CREDIT_CARD" | "EDIT_LOAN";
};

const format = (val: string) => val + `%`;
const parse = (val: string) => val.replace(/^%/, "");

const InputPercentage: React.FC<InputPercentageProps> = ({
  initialValue,
  id,
  columnType,
  actionType,
}) => {
  const timeout = useRef<null | ReturnType<typeof setTimeout>>();
  const { dispatch } = useContext<CurrentUserContext>(UserContext);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [value, setValue] = useState<string>(parse(initialValue));

  useEffect(() => {
    if (!dataLoaded) {
      setDataLoaded(true);
      return;
    }
    if (initialValue === value) return;

    if (timeout.current !== null) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(async () => {
      console.log("timeout", actionType);
      dispatch({
        type: actionType,
        payload: {
          id,
          [columnType]: value,
        },
      });
    }, 1000);
  }, [dispatch, id, dataLoaded, value, initialValue, columnType, actionType]);

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

export default InputPercentage;
