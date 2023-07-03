import { Input, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { CurrentUserContext, UserContext } from "../../providers/UserContext";

type InputTextProps = {
  initialValue: string;
  id: string;
  columnType: "endDate" | "source" | "dueDate";
  actionType: "EDIT_RECURRING" | "EDIT_CREDIT_CARD" | "EDIT_LOAN";
};

const InputText: React.FC<InputTextProps> = ({ initialValue, id, actionType, columnType }) => {
  const timeout = useRef<null | ReturnType<typeof setTimeout>>();
  const { dispatch } = useContext<CurrentUserContext>(UserContext);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [value, setValue] = useState<string>(initialValue);

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
          [columnType]: columnType === "source" ? value : parseFloat(value),
        },
      });
    }, 500);
  }, [dispatch, id, dataLoaded, value, initialValue, actionType, columnType]);

  return isEditable ? (
    <Input
      width="100%"
      size="sm"
      onChange={(event) => setValue(event.target.value)}
      value={value}
      onBlur={() => setIsEditable(false)}
      autoFocus
    />
  ) : (
    <Text onClick={() => setIsEditable(true)}>{value}</Text>
  );
};

export default InputText;
