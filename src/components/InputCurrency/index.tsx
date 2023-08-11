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
      console.log("timeout", actionType);
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

  return isEditable ? (
    <NumberInput
      onChange={(valueNumber: string) => setValue(parseMoney(valueNumber))}
      value={format(value)}
      onBlur={() => setIsEditable(false)}
      autoFocus
      textAlign="right"
      size="sm"
      width="auto"
    >
      <NumberInputField />
    </NumberInput>
  ) : (
    <Text onClick={() => setIsEditable(true)}>{formatCurrency(value)}</Text>
  );
};

export default InputCurrency;
