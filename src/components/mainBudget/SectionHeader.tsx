import { Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { CurrentUserContext, UserContext } from "../../providers/UserContext";
import { generateId } from "../../models/localStorage.model";
import { NewActions } from "../../reducers/simpleBudgetReducer";

type SectionHeaderProps = {
  currentTab: number;
};

const headerData = [
  {
    heading: "Overview",
    subHeading: "A glance at your monthly charges from multiple sources.",
  },
  {
    heading: "Monthly Charges",
    subHeading: "Monthly recurring charges.",
  },
  {
    heading: "Credit Cards",
    subHeading: "Overall credit card balances.",
  },
  {
    heading: "Loans",
    subHeading: "Overall loan balances.",
  },
];

const SectionHeader: React.FC<SectionHeaderProps> = ({ currentTab }) => {
  const { dispatch } = useContext<CurrentUserContext>(UserContext);

  const generateAction = (tab: number): NewActions => {
    switch (tab) {
      case 1:
        return {
          type: "ADD_RECURRING",
          payload: {
            id: generateId(),
            source: "New charge",
            dueDate: 1,
            amount: 0,
            pending: true,
          },
        };
      case 2:
        return {
          type: "ADD_CREDIT_CARD",
          payload: {
            id: generateId(),
            source: "New Credit Card",
            balance: 0,
            minimumPayment: 0,
            limit: 0,
            dueDate: 1,
            interest: 0,
            pending: true,
          },
        };
      case 3:
        return {
          type: "ADD_LOAN",
          payload: {
            id: generateId(),
            source: "New Loan",
            balance: 0,
            minimumPayment: 0,
            remainingPayments: 0,
            originalAmount: 0,
            dueDate: 1,
            endDate: "8/20/26",
            interest: 0,
            pending: true,
          },
        };
      default:
        // it really shouldn't ever hit this so i'm just doing it to avoid undefined return ;_;
        console.warn(`Somehow we're getting an invalid tab id - ${currentTab}`);
        return {
          type: "ADD_RECURRING",
          payload: {
            id: generateId(),
            source: "New charge",
            dueDate: 1,
            amount: 0,
            pending: true,
          },
        };
    }
  };

  return (
    <Flex justify="space-between" align="center">
      <VStack color="white" align="left">
        <Heading as="h3" size="md">
          {headerData[currentTab].heading}
        </Heading>
        <Text color="gray" fontSize="14px">
          {headerData[currentTab].subHeading}
        </Text>
      </VStack>
      {currentTab !== 0 && (
        <Button onClick={() => dispatch(generateAction(currentTab))}>+ Add</Button>
      )}
    </Flex>
  );
};

export default SectionHeader;
