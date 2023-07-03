import { Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { CurrentUserContext, UserContext } from "../../providers/UserContext";

const SectionHeader: React.FC = () => {
  const { dispatch } = useContext<CurrentUserContext>(UserContext);

  return (
    <Flex justify="space-between" align="center">
      <VStack color="white" align="left">
        <Heading as="h3" size="lg">
          Credit Cards
        </Heading>
        <Text>Overall Credit Card Balances.</Text>
      </VStack>
      <Button
        onClick={() =>
          dispatch({
            type: "ADD_CREDIT_CARD",
            payload: {
              id: new Date().toString(),
              source: "Bank of America",
              balance: 45.97,
              minimumPayment: 8.0,
              limit: 450.0,
              dueDate: 2,
              interest: 0.74,
            },
          })
        }
      >
        + Add
      </Button>
    </Flex>
  );
};

export default SectionHeader;
