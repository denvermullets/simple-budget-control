import { DatePicker } from "../DatePickerCustom";
import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import { CurrentUserContext, UserContext } from "../../providers/UserContext";

const PayPeriod: React.FC = () => {
  const { localBudgetData, dispatch } = useContext<CurrentUserContext>(UserContext);
  const { payPeriodStart, payPeriodEnd } = localBudgetData.accountInfo;
  const [startDate, setStartDate] = useState<Date>(new Date(payPeriodStart));
  const [endDate, setEndDate] = useState<Date>(new Date(payPeriodEnd));

  useEffect(() => {
    const today = dayjs(startDate);
    const futureDate = today.add(13, "day");
    const formattedDate = futureDate.toDate();

    setEndDate(formattedDate);
  }, [startDate]);

  useEffect(() => {
    console.log("pay period updated");
    dispatch({
      type: "UPDATE_PAY_PERIOD",
      payload: { startDate, endDate },
    });
  }, [startDate, endDate, dispatch]);

  return (
    <VStack align="left" marginTop={2}>
      <HStack>
        <VStack align="left" marginRight={2}>
          <Text fontSize="0.8rem">Pay period start</Text>
          <DatePicker value={startDate} onChange={(date) => setStartDate(date || startDate)} />
        </VStack>
        <VStack align="left">
          <Text fontSize="0.8rem">Pay period end</Text>
          <DatePicker value={endDate} onChange={(date) => setEndDate(date || endDate)} />
        </VStack>
      </HStack>

      <Button
        variant="addNew"
        onClick={() =>
          dispatch({
            type: "UPDATE_BUDGET_DATA",
            payload: { startDate, endDate },
          })
        }
        marginTop={4}
      >
        Reset to current pay period
      </Button>
    </VStack>
  );
};

export default PayPeriod;
