import { Flex, Input, NumberInput, NumberInputField, Text } from "@chakra-ui/react";
import { MonthlyRecurring } from "../../models/localStorage.model";
import { useContext, useEffect, useRef, useState } from "react";
import { CurrentUserContext, UserContext } from "../../providers/UserContext";

const format = (val: string) => `$` + val;
const parse = (val: string) => val.replace(/^\$/, "");

const RowRecurring: React.FC<MonthlyRecurring> = ({ id, source, dueDate, amount }) => {
  const { dispatch } = useContext<CurrentUserContext>(UserContext);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [amountEditable, setAmountEditable] = useState<boolean>(false);
  const [sourceEditable, setSourceEditable] = useState<boolean>(false);
  const [dueDateEditable, setDueDateEditable] = useState<boolean>(false);
  const [amountValue, setAmountValue] = useState<string>(parse(amount.toString()));
  const [dueDateValue, setDueDateValue] = useState<number>(dueDate);
  const [sourceValue, setSourceValue] = useState<string>(source);
  const timeout = useRef<null | ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (!dataLoaded) {
      setDataLoaded(true);
      return;
    }

    if (
      source === sourceValue &&
      dueDate === dueDateValue &&
      amount === Number(parse(amountValue))
    ) {
      // data hasn't changed so don't trigger a re-render
      return;
    }

    if (timeout.current !== null) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(async () => {
      console.log("timeout");
      dispatch({
        type: "EDIT_RECURRING",
        payload: {
          id,
          source: sourceValue,
          dueDate: dueDateValue,
          amount: Number(parse(amountValue)),
        },
      });
    }, 500);
  }, [amountValue, dueDateValue, sourceValue, dispatch, id, dataLoaded, source, dueDate, amount]);

  return (
    <Flex gap={6}>
      {sourceEditable ? (
        <Input
          onChange={(event) => setSourceValue(event.target.value)}
          value={sourceValue}
          onBlur={() => setSourceEditable(false)}
          autoFocus
        />
      ) : (
        <Text onClick={() => setSourceEditable(true)}>{sourceValue}</Text>
      )}

      {dueDateEditable ? (
        <NumberInput
          onChange={(dueDateVal: string) => setDueDateValue(Number(dueDateVal))}
          value={dueDateValue}
          onBlur={() => setDueDateEditable(false)}
          autoFocus
        >
          <NumberInputField />
        </NumberInput>
      ) : (
        <Text onClick={() => setDueDateEditable(true)}>{dueDateValue}</Text>
      )}
      {amountEditable ? (
        <NumberInput
          onChange={(valueNumber: string) => setAmountValue(parse(valueNumber))}
          value={format(amountValue)}
          onBlur={() => setAmountEditable(false)}
          autoFocus
        >
          <NumberInputField />
        </NumberInput>
      ) : (
        <Text onClick={() => setAmountEditable(true)}>{format(amountValue)}</Text>
      )}
    </Flex>
  );
};

export default RowRecurring;
