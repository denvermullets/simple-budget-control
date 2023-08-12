import { Flex, Heading, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import InputCurrency from "../InputCurrency";
import { formatCurrency } from "../../reducers/budgetHelpers";
import { CurrentUserContext, UserContext } from "../../providers/UserContext";

const SideBarTop: React.FC = () => {
  const { localBudgetData } = useContext<CurrentUserContext>(UserContext);
  const [totalPending, setTotalPending] = useState<number>(0);

  useEffect(() => {
    const calculatePending = () => {
      let creditCards = 0;
      let loans = 0;
      let monthlyRecurring = 0;

      localBudgetData.creditCards.map((creditCard) => {
        if (creditCard.pending) {
          creditCards += creditCard.minimumPayment;
        }
      });
      localBudgetData.loans.map((loan) => {
        if (loan.pending) {
          loans += loan.minimumPayment;
        }
      });
      localBudgetData.monthlyRecurring.map((recurring) => {
        if (recurring.pending) {
          monthlyRecurring += recurring.amount;
        }
      });

      return creditCards + loans + monthlyRecurring;
    };

    setTotalPending(calculatePending());
  }, [localBudgetData, localBudgetData.monthlyRecurring]);

  return (
    <>
      <Flex justify="space-between" align="center" marginTop={2}>
        <Text variant="sidebar">Current amount free</Text>
        <Heading as="h3" size="sm">
          <InputCurrency
            id={0}
            initialValue={localBudgetData.accountInfo.amountFree.toString()}
            columnType="amountFree"
            actionType="UPDATE_AMOUNT_FREE"
          />
        </Heading>
      </Flex>
      <Flex justify="space-between" align="center">
        <Text variant="sidebar">Charges pending</Text>
        <Heading as="h3" size="sm">
          {formatCurrency(totalPending.toString())}
        </Heading>
      </Flex>
      <Flex justify="space-between" align="center">
        <Text variant="sidebar">Amount remaining</Text>
        <Heading as="h3" size="sm">
          {formatCurrency((localBudgetData.accountInfo.amountFree - totalPending).toString())}
        </Heading>
      </Flex>
    </>
  );
};

export default SideBarTop;
