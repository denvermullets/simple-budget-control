import { Input, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { CurrentUserContext, UserContext } from "../../providers/UserContext";

type InputTextProps = {
  initialValue: string;
  id: number;
  columnType: "endDate" | "source" | "dueDate" | "remainingPayments";
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
      dispatch({
        type: actionType,
        payload: {
          id,
          [columnType]:
            columnType === "source" || columnType === "endDate" ? value : parseFloat(value),
        },
      });
    }, 1000);
  }, [dispatch, id, dataLoaded, value, initialValue, actionType, columnType]);

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => event.target.select();

  return isEditable ? (
    <Input
      width="100%"
      size="sm"
      onChange={(event) => setValue(event.target.value)}
      value={value}
      onBlur={() => setIsEditable(false)}
      autoFocus
      variant="sourceInput"
      onFocus={handleFocus}
      rounded={10}
    />
  ) : (
    <Text onClick={() => setIsEditable(true)} style={{ cursor: "pointer" }}>
      {value}
    </Text>
  );
};

export default InputText;
