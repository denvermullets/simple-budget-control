import { Flex, Heading, Text } from "@chakra-ui/react";
import { CurrentUserContext, UserContext } from "../../providers/UserContext";
import { useContext } from "react";
import { formatCurrency } from "../../reducers/budgetHelpers";

const SideBarBottom: React.FC = () => {
  const { localBudgetData } = useContext<CurrentUserContext>(UserContext);

  const recurringCharge = () => {
    // convert to cents
    const totalCents = localBudgetData.monthlyRecurring.reduce((total, recurring) => {
      const cents = Math.round(recurring.amount * 100);
      return total + cents;
    }, 0);

    const totalDollars = totalCents / 100;

    return totalDollars;
  };
  const loans = () => {
    // convert to cents
    const totalCents = localBudgetData.loans.reduce((total, loan) => {
      const cents = Math.round(loan.minimumPayment * 100);
      return total + cents;
    }, 0);

    const totalDollars = totalCents / 100;

    return totalDollars;
  };
  const creditCards = () => {
    // convert to cents
    const totalCents = localBudgetData.creditCards.reduce((total, credit) => {
      const cents = Math.round(credit.minimumPayment * 100);
      return total + cents;
    }, 0);

    const totalDollars = totalCents / 100;

    return totalDollars;
  };

  return (
    <>
      <Flex justify="space-between" align="center" marginTop={2}>
        <Text variant="sidebar">Recurring charges</Text>
        <Heading as="h2" size="sm">
          {formatCurrency(recurringCharge().toString())}
        </Heading>
      </Flex>
      <Flex justify="space-between" align="center">
        <Text variant="sidebar">Credit card payments</Text>
        <Heading as="h2" size="sm">
          {formatCurrency(creditCards().toString())}
        </Heading>
      </Flex>
      <Flex justify="space-between" align="center">
        <Text variant="sidebar">Loan payments</Text>
        <Heading as="h2" size="sm">
          {formatCurrency(loans().toString())}
        </Heading>
      </Flex>
    </>
  );
};

export default SideBarBottom;
