import { NumberInput, NumberInputField, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { CurrentUserContext, UserContext } from "../../providers/UserContext";
import { formatCurrency, parseMoney } from "../../reducers/budgetHelpers";

type InputCurrencyProps = {
  initialValue: string;
  id: number;
  columnType:
    | "balance"
    | "limit"
    | "availableBalance"
    | "minimumPayment"
    | "originalAmount"
    | "amount"
    | "amountFree";
  actionType: "EDIT_RECURRING" | "EDIT_CREDIT_CARD" | "EDIT_LOAN" | "UPDATE_AMOUNT_FREE";
};

const format = (val: string) => `$` + val;

const InputCurrency: React.FC<InputCurrencyProps> = ({
  initialValue,
  id,
  columnType,
  actionType,
}) => {
  const timeout = useRef<null | ReturnType<typeof setTimeout>>();
  const numberInputRef = useRef<HTMLInputElement>(null);
  const { dispatch } = useContext<CurrentUserContext>(UserContext);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [value, setValue] = useState<string>(parseMoney(initialValue));

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
      if (actionType === "UPDATE_AMOUNT_FREE") {
        dispatch({
          type: "UPDATE_AMOUNT_FREE",
          payload: {
            amountFree: parseFloat(value),
          },
        });
      } else {
        dispatch({
          type: actionType,
          payload: {
            id,
            [columnType]: parseFloat(value),
          },
        });
      }
    }, 1000);
  }, [dispatch, id, dataLoaded, value, initialValue, columnType, actionType]);

  useEffect(() => {
    // for some reason putting this in a different component fixed all of the autofocus issues??
    if (isEditable && numberInputRef.current) {
      numberInputRef.current.focus();
    }
  }, [isEditable]);

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => event.target.select();

  return isEditable ? (
    <NumberInput
      onChange={(valueNumber: string) => setValue(parseMoney(valueNumber))}
      value={format(value)}
      onBlur={() => setIsEditable(false)}
      autoFocus
      size="sm"
      width="auto"
      variant="numberInput"
      onFocus={handleFocus}
    >
      <NumberInputField ref={numberInputRef} width={125} rounded={10} />
    </NumberInput>
  ) : (
    <Text
      onClick={() => setIsEditable(true)}
      style={{ cursor: "pointer" }}
      {...(columnType === "amountFree" && { color: "#2ed3b7" })}
    >
      {formatCurrency(value)}
    </Text>
  );
};

export default InputCurrency;
