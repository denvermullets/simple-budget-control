import { Flex, Heading, Text } from "@chakra-ui/react";
import { CurrentUserContext, UserContext } from "../../providers/UserContext";
import { useContext } from "react";
import { formatCurrency } from "../../reducers/budgetHelpers";

const SideBarBottom: React.FC = () => {
  const { localBudgetData } = useContext<CurrentUserContext>(UserContext);

  const recurringCharge = () => {
    let recurring = 0;

    localBudgetData.monthlyRecurring.map((monthly) => (recurring += monthly.amount));

    return recurring;
  };
  const loans = () => {
    let loans = 0;

    localBudgetData.loans.map((loan) => (loans += loan.minimumPayment));

    return loans;
  };
  const creditCards = () => {
    let creditCard = 0;

    localBudgetData.creditCards.map((credit) => (creditCard += credit.minimumPayment));

    return creditCard;
  };

  return (
    <>
      <Flex justify="space-between" align="center" marginTop={2}>
        <Text size="xs">Recurring charges</Text>
        <Heading as="h3" size="md">
          {formatCurrency(recurringCharge().toString())}
        </Heading>
      </Flex>
      <Flex justify="space-between" align="center" marginTop={2}>
        <Text size="xs">Credit card payments</Text>
        <Heading as="h3" size="md">
          {formatCurrency(loans().toString())}
        </Heading>
      </Flex>
      <Flex justify="space-between" align="center" marginTop={2}>
        <Text size="xs">Loan payments</Text>
        <Heading as="h3" size="md">
          {formatCurrency(creditCards().toString())}
        </Heading>
      </Flex>
    </>
  );
};

export default SideBarBottom;
